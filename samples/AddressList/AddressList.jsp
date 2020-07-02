<%@ page contentType="text/html;charset=UTF-8"
         import="java.io.*,javax.json.*,java.util.Arrays,java.util.stream.Collectors" %>
<%
  request.setCharacterEncoding("UTF-8");
  String bodyText = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
%>
<%!
  private static String generateAddressRows(String text) {
    StringBuilder sb = new StringBuilder();
    try (JsonReader reader = Json.createReader(new StringReader(text))) {
      JsonStructure jsonStructure = reader.read();
      JsonArray targets = (JsonArray) Json.createPointer("").getValue(jsonStructure);
      targets.forEach(target -> {
        String address1 = ((JsonObject) target).getString("address1");
        String address2 = ((JsonObject) target).getString("address2");
        String address3 = ((JsonObject) target).getString("address3");
        String json = ("{'address1':'"+address1+"','address2':'"+address2+"','address3':'"+address3+"'}").replace("'","\\\"");
        sb.append("<tr><td><button onClick='populateAddress(\""+json+"\"); return false;'>Select</button></td><td>"+address1+"</td><td>"+address2+address3+"</td></tr>"+System.lineSeparator());
      });
    }
    return sb.toString();
  }
%>

<table id="addressTable" border="1" cellpadding="0" cellspacing="0">
<tr><td><button onClick='populateAddress();return false;'>Cancel</button></td><td>Prefecture</td><td>Address</td></tr>
<%= generateAddressRows(bodyText) %>
</table>
