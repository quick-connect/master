package AddressLookup;

import java.util.Map;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import webextension.ResponseHtmlUpdater;
import webextension.annotation.WebExtensionFilter;

@WebExtensionFilter(contentType="text/html", servletPath="/AddressLookup/")
public class AddressLookupUpdater extends ResponseHtmlUpdater {

  public boolean update(Map<String, String> context, Document document) throws Exception {
    Element head = document.selectFirst("head");
    if (head == null) return false;
    head.append("<script src='../WebExtension.js'></script>")
        .append("<script src='AddressLookup.js'></script>");

    Element input = document.selectFirst("input[id=zipcode]");
    if (input == null) return false;
    input.after("<button onClick='lookup();return false;'>Lookup</button>");

    return true;
  }
}