<%@ page contentType="text/html;charset=UTF-8"
         import="java.io.*,java.util.*" %>
<html>
<head>
<title>Post Data</title>
</head>
<body>
<h3>Access Log</h3>

<table border="1">
<tr>
  <th>Date</th><th>Method</th><th>body text</th>
</tr>
<%
try {
  BufferedReader in = new BufferedReader(new FileReader(application.getRealPath("postdata.log")),10);
  String line; 
  while((line = in.readLine()) != null) {
    StringTokenizer token = new StringTokenizer(line, "\t");
    out.println("<tr>");
    while (token.hasMoreTokens()){
      out.println("<td nowrap>" + token.nextToken() + "</td>");
    }
    out.println("</tr>");
  }
  in.close();
} catch (Exception ex) {}
%>
</table>
</body>
</html>
