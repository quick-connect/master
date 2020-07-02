package AddressList;

import java.util.Map;
import org.jsoup.nodes.Document;
import webextension.ResponseHtmlUpdater;
import webextension.annotation.WebExtensionFilter;

@WebExtensionFilter(contentType="text/html", servletPath="/AddressList/index.html")
public class AddressListUpdater extends ResponseHtmlUpdater {

  public boolean update(Map<String, String> context, Document document) throws Exception {
    document.selectFirst("head")
            .append("<script src='../WebExtension.js'></script>")
            .append("<script src='AddressLookup.js'></script>");

    document.selectFirst("input[id=zipcode]")
            .after("<button id='myLookupButton' onClick='lookup();return false;'>Lookup</button>");
    return true;
  }
}