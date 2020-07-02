package PasswordGenerator;

import java.util.Map;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import webextension.ResponseHtmlUpdater;
import webextension.annotation.WebExtensionFilter;

@WebExtensionFilter(contentType="text/html",
                    servletPath="/PasswordGenerator/index.html")
public class PasswordGeneratorUpdater extends ResponseHtmlUpdater {

  public boolean update(Map<String, String> context, Document document) throws Exception {
    Element head = document.selectFirst("head");
    if (head == null) return false;
    head.append("<script src='../WebExtension.js'></script>")
        .append("<script src='PasswordGenerator.js'></script>");

    Element input = document.selectFirst("input[id=password]");
    if (input == null) return false;
    input.after("<button id='myButton' onClick='openFrame();return false;'>Show suggestions</button>");

    return true;
  }
}