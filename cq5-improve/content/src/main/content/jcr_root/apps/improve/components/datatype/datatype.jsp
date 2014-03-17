<%@page import="javax.jcr.Value"%>
<%@include file="/libs/foundation/global.jsp"%>
<%
	String selectFromFileJsp = properties.get("selectFromFileJsp","selectFromFileJsp : Default");
	Value[] values = (Value[])properties.get("cq:tags");
%>

selectFromFileJsp : <%= selectFromFileJsp %> <br />

<%if(values != null){for(Value value:values){ %>
	<%=value.getString() %>
<% }}%>

