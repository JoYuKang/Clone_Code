
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Cotent-type" content="text/html"; charset="UTF-8">

<title>JSP 웹 게시판</title>
</head>
<body>
	<%
		session.invalidate();
	%>
	<script>
		location.href='main.jsp';
	</script>
</body>
</html>