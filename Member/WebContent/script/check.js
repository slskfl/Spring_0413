function validation(){
	if(document.frm.id.value==""){
		alert("아이디를 입력하세요.");
		document.frm.id.focus();
		return false;
	} else if(document.frm.id.value.length>10){
		alert("아이디를 10글자 이하로 입력하세요.");
		document.frm.id.focus();
		return false;
	}
	if(document.frm.pwd.value==""){
		alert("비밀번호를  입력하세요.");
		document.frm.pwd.focus();
		return false;
	}else if(document.frm.pwd.value.length>10){
		alert("비밀번호를 10글자 이하로 입력하세요.");
		document.frm.pwd.focus();
		return false;
	}
	if(document.frm.name.value==""){
		alert("이름을  입력하세요.");
		document.frm.name.focus();
		return false;
	}
	if(document.frm.email.value==""){
		alert("이메일을  입력하세요.");
		document.frm.email.focus();
		return false;
	}else if(!validityCheckEmail()){
		alert("이메일 형식이 올바르지 않습니다.");
		document.frm.email.focus();
		return false;
	}
	maskingPwd();
	return true;
}

function maskingPwd(){
	var maskingPw=document.frm.pwd.value; //마스킹할 원본 문자
	var pwLength=maskingPw.length; //마스킹할 원본 문자 길이
	
	
	var result=maskingPw.substr(0,2);//앞 두글자
	for(var i=0; i<pwLength-2; i++){
		var str='*';
		result=result.concat(str);
	} 
	document.frm.pwd.value=result;
}

function validityCheckEmail(){
	var email=document.frm.email.value; //유효성 검사할 원본 이메일
	var formatA = /[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]{2,4}\w+/g; //.com 형태
	var formatB = /[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-.]{1,2}\.[A-Za-z0-9\-.]{1,2}\w+/g; //.co.kr 형태
    if (formatA.test(email)) {
        return true;
    }
    if(formatB.test(email)){
    	return true;
    }
    return false;
}







