<%@include file="/libs/foundation/global.jsp"%>
<%
	String slogan = properties.get("slogan", "Null My journey. My CWT.");
	String context = properties.get("context", "Null Careers Netherlands");
	String brand = properties.get("brand", "");
%>
<header id="header">
	<div class="container">
		<div class="line">
			<div class="pull-left">
				<h1 class="brand">
					<img alt="Carlson Wagonlit Travel" src="<%=brand%>">
				</h1>
			</div>
			<div class="mod">
				<h2 class="slogan"><%=slogan %></h2>
				<span class="context"><%=context %></span>
			</div>
		</div>
	</div>
</header>