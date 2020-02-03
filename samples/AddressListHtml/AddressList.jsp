<%@ page contentType="text/html;charset=UTF-8"
         import="java.util.Arrays,java.util.stream.Collectors" %>
<%
  request.setCharacterEncoding("UTF-8");
  String bodyText = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
%>
<%!
  private static String generateAddressRows(String text) {
    String[] rows = text.split(",");
    return Arrays.stream(rows).map(row -> {
      return "<tr><td><button onClick='populateAddress(\""+row+"\"); return false;'>Select</button></td><td>"+row.replace("|","</td><td>")+"</td></tr>";
    }).collect(Collectors.joining(System.lineSeparator()));
  }
%>

<table id="addressTable" border="1" cellpadding="0" cellspacing="0">
<tr><td><button onClick='populateAddress();return false;'>Cancel</button></td><td>Prefecture</td><td>Address</td></tr>
<%= generateAddressRows(bodyText) %>
</table>
