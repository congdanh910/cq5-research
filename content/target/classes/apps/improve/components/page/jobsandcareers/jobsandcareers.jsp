<%@page import="com.day.cq.wcm.api.WCMMode"%>
<%@page import="javax.jcr.Session"%>
<%@page import="org.apache.sling.api.resource.ResourceResolver"%>
<%@page import="org.apache.commons.lang3.StringUtils"%>
<%@include file="/libs/foundation/global.jsp"%>
<!DOCTYPE html>
<html lang="fr" class="no-js">
<cq:include script="head.jsp" />
<%
	final boolean isEditMode = WCMMode.fromRequest(request) == WCMMode.EDIT;
	pageContext.setAttribute("isEditMode", isEditMode);
%>
<body>
	<div id="app">
		<div class="container">
			<noscript>
				<div class="alert alert-warning">
					I don't know this sentence!!!
				</div>
			</noscript>
			<%
				String configPage = properties.get("configurationpage", "");
				if(StringUtils.isNotBlank(configPage)){
					if(!configPage.startsWith("/content")){
						configPage = "/content" + configPage;
					}
					ResourceResolver res = slingRequest.getResourceResolver();					
					Session ses = res.adaptTo(Session.class);
					if(ses.getNode(configPage) != null && ses.getNode(configPage).hasNode("jcr:content/banner")){
						slingRequest.setAttribute("configPage", configPage);
						slingRequest.setAttribute("hasBanner", true);
					}
				}
			%>
			<c:if test="${hasBanner == true}">	
				<sling:include path="${configPage }/jcr:content/banner.html"/>
			</c:if>	
		</div>
		<!-- navigation -->
		<cq:include path="navigation" resourceType="improve/components/navigation" />
		<div class="banner">
			<c:if test="${isEditMode}" >
				<input type="button" value ="Edit Configuration Page" style='font-size: 14px;font-weight: bold;'
					onclick="doOpenDlg('/apps/improve/components/page/jobsandcareers/configurationpage.infinity.json', '<%=currentNode.getPath() %>');" />
			</c:if>		
		</div>
		<div>
			<cq:include path="datatype" resourceType="improve/components/datatype" />
		</div>
	</div>
</body>
</html>