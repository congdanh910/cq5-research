<%@page import="org.apache.sling.commons.json.JSONArray"%>
<%@page import="org.apache.sling.commons.json.io.JSONWriter"%>
<%@page import="org.apache.sling.commons.json.JSONObject"%>
<%@page import="com.day.cq.commons.JSONItem"%>
<% 
	response.setContentType("application/json");

	/*----------------------------using json object and json array	---------------------*/
	JSONObject list = new JSONObject();
	JSONArray jsonArray = new JSONArray();
	for(int i=0; i <= 2; i++){
		JSONObject child = new JSONObject();
		child.put("name", "danh" + i);
		jsonArray.put(i, child);
	}
	list.put("list", jsonArray);
	out.write(list.toString());	
	
	/*----------------------------using json writer-------------------------------------*/
	/*
	JSONWriter jsonWriter = new JSONWriter(out);
	jsonWriter.object().key("list").array();
	for(int i=0; i <= 2; i++){
		jsonWriter.object().key("name").value("danh" + i).endObject();
	}
	jsonWriter.endArray().endObject();
	*/
%>