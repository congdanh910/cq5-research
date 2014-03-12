<%@include file="/libs/foundation/global.jsp"%>
<head>
	<meta charset="utf-8">
	<title>Home Page</title>
	<meta name="description" content="">
	<meta name="viewport" content="user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1, width=device-width">
	<link rel="stylesheet" href="/etc/designs/improve/stylesheets/app.css">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114-precomposed.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-72-precomposed.png">
	<link rel="apple-touch-icon-precomposed" href="apple-touch-icon-57-precomposed.png">
	<link rel="shortcut icon" href="favicon.png">
	<meta property="og:site_name" content="Carlson Wagonlit">
	<meta property="og:title" content="$title de la page">
	<meta property="og:url" content="$url de la page">
	<meta property="og:description" content="$balise meta description">
	<script src="/etc/designs/improve/javascripts/libs/modernizr.js"></script>
	<cq:include script="/libs/wcm/core/components/init/init.jsp"/>
	<script>
	    function doOpenDlg(url, path) {
	        var d = CQ.WCM.getDialog(url);
	        var reloadPage = true;
	        if(d) {
	            if( reloadPage ) {
	                d.success = function(form, action) {
	                    CQ.Util.reload(CQ.WCM.getContentWindow());
	                };
	            }
	            d.show();
	            d.loadContent(path);
	        }
	    }
	</script>
	<cq:includeClientLib js="improve.commons.widgets"/>
</head>