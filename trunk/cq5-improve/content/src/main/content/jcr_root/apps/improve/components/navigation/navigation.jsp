<%@page import="javax.jcr.NodeIterator"%>
<%@page import="org.apache.sling.api.resource.Resource"%>
<%@include file="/libs/foundation/global.jsp"%>
<%@page import="javax.jcr.Node"%>

<%
	Resource res = resourceResolver.getResource("/content/Improve/Content/improve");
	Node rootNode = res.adaptTo(Node.class);
	NodeIterator nodeIterator = rootNode.getNodes();
	if(nodeIterator.hasNext()){
		nodeIterator.nextNode();
	}
	if(currentNode == null){
		currentNode = currentPage.adaptTo(Node.class);
	}
%>

<div id="nav-main">
	<div class="container">
		<ul class="nav nav-pills">
			<li class="home"><a href="<%=rootNode.getPath() %>.html" title="Accueil"><img src="/etc/designs/improve/images/icons/icon-home.png" alt="Accueil"></a></li>
			<% while(nodeIterator.hasNext()) {
				Node node = nodeIterator.nextNode();
				Node nodeLabel = currentNode.getSession().getNode(node.getPath() + "/jcr:content");
				String title = nodeLabel.hasProperty("jcr:title")?nodeLabel.getProperty("jcr:title").getValue().getString():"";
			%>
				 <li data-toggle="subcontent"><a href="<%=node.getPath() %>.html" title="<%=title %>"><%=title %></a>
			<% } %>      	    
		</ul>
	</div>
</div>		          