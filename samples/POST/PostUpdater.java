package POST;

import java.util.Map;
import org.jsoup.nodes.Document;
import webextension.ResponseHtmlUpdater;
import webextension.annotation.WebExtensionFilter;

@WebExtensionFilter(contentType="text/html",
                    servletPath="/POST/index.jsp")
public class PostUpdater extends ResponseHtmlUpdater {

  public boolean update(Map<String, String> context, Document document) throws Exception {
    document.selectFirst("head")
            .append("<script src='../WebExtension.js'></script>")
            .append("<script src='PostData.js'></script>");

    document.selectFirst("table")
            .after("<button id='myButton' onClick='postData();return false;'>Add POST data</button>");
    return true;
  }
}