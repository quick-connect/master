<%@ page contentType="text/html;charset=UTF-8"
         import="java.io.*,java.util.*,java.text.*,java.util.stream.Collectors" %>
<%
  request.setCharacterEncoding("UTF-8");
  String bodyText = request.getReader().lines().collect(Collectors.joining(System.lineSeparator()));
  String method = request.getMethod();

BufferedWriter bw = new BufferedWriter(
  new FileWriter(application.getRealPath("postdata.log"),true),10);

StringBuilder buf = new StringBuilder();
Calendar objCal=Calendar.getInstance();
SimpleDateFormat objFmt=new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
buf.append(objFmt.format(objCal.getTime())+"\t");
buf.append(method+"\t");
buf.append(bodyText+"\t");
bw.write(buf.toString() + System.getProperty("line.separator"));
bw.close();
%>