package MultiFrames;

import java.util.Map;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import webextension.ResponseHtmlUpdater;
import webextension.annotation.WebExtensionFilter;

@WebExtensionFilter(contentType="text/html", servletPath="/MultiFrames/index.html")
public class MultiFramesUpdater extends ResponseHtmlUpdater {

  public boolean update(Map<String, String> context, Document document) throws Exception {
    document.selectFirst("head")
            .append("<script src='../WebExtension.js'></script>")
            .append("<script src='MultiFrames.js'></script>");

    Element number = document.selectFirst("input[id=number]");
    number.after("<button id='subButton' onClick='sub();return false;'>Subtract</button>");
    number.after("<button id='addButton' onClick='add();return false;'>Add</button>");
    return true;
  }
}