<%@page import="com.day.cq.commons.jcr.JcrConstants"%>
<%@page import="com.demo.improve.presenter.ConfigPresenter"%>
<%@page import="com.demo.improve.presenter.PresenterUtils"%>
<%@include file="/libs/foundation/global.jsp"%>
<cq:defineObjects/>
<h1>------------------------------------------------------</h1>
<%
	PresenterUtils.makePresenter(ConfigPresenter.class, slingRequest, properties, currentNode);
%>

Abstract Presenter : ${Abstract} <br />
<h1>------------------------------------------------------</h1>


<%
	String[] selectors = slingRequest.getRequestPathInfo().getSelectors();
	if (selectors != null && selectors.length > 0) {
		for (String selector : selectors) {
			out.println(selector + "<br />");
		}
	}
 %>
 
 <h1>------------------------------------------------------</h1>
 <h3>display the name of the component</h3>
${component.name}
 
<h3>page name</h3>
${currentPage.name}
 
<h3>resource page name</h3>
${resourcePage.name}

<h1>------------------------Properties------------------------------</h1>

<%

%> 