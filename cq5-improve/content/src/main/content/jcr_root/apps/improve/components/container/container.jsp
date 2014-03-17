<%@include file="/libs/foundation/global.jsp"%>
<%@page import="com.demo.improve.presenter.ContainerPresenter"%>
<%@page import="com.demo.improve.presenter.PresenterUtils"%>
<%
	PresenterUtils.makePresenter(ContainerPresenter.class, slingRequest, properties, currentNode);

%>
<div class="span8">
	  <div class="box primary-color">
	    <h2 class="heading-heavy">${container.newRelease}</h2>
	    <div class="line">
	      <div class="pull-left thumb"><img alt="New Releases" src="${container.imagePath}"></div>
	      <div class="mod"><span class="date"><fmt:formatDate pattern="MMMM dd, yyyy" value="${container.createDate}" /></span>
	        <h3 class="heading">${container.title}</h3>
	        <p>${container.sortDescription}</p>
	      </div>
	    </div>
	    <div class="action pull-right"><a href="#" class="bullet-line"><span class="ico icon-bullet"> </span><span>Discover all news</span></a></div>
	  </div>
</div>