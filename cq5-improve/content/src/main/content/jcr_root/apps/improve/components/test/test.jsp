<%@page import="com.demo.improve.presenter.ConfigPresenter"%>
<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.demo.improve.presenter.PresenterUtils"%>
<h1>------------------------------------------------------</h1>
<%
	PresenterUtils.makePresenter(ConfigPresenter.class, slingRequest, properties, currentNode);
%>

Abstract Presenter : ${Abstract} <br />
