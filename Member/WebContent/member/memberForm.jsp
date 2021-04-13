<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<%
	request.setCharacterEncoding("UTF-8");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<script type="text/javascript" src="${contextPath}/script/check.js" ></script>
</head>
<body>
	<form name="frm" method="post" action="${contextPath }/member/memberInfo.do">
		<table>
			<tr>
				<td width="200">아이디 : </td>
				<td width="400">
					<input type="text" name="id"/>
				</td>	
			</tr>
			<tr>
				<td width="200">비밀번호 : </td>
				<td width="400">
					<input type="password" name="pwd"/>
				</td>	
			</tr>
			<tr>
				<td width="200">이름 : </td>
				<td width="400">
					<input type="text" name="name"/>
				</td>	
			</tr>
			<tr>
				<td width="200">이메일 : </td>
				<td width="400">
					<input type="text" name="email"/>
				</td>	
			</tr>
			<tr>
				<td colspan="2" align="center">
					<input type="submit" value="가입하기" onclick="return validation();"/> 
					<input type="reset" value="다시작성" /> 
				</td>
			</tr>
		</table>
	</form>
</body>
</html>