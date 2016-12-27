function validateForm()
{
	var illegal=/\W/;
	var flag = 0;
	var regex = /^[a-zA-Z0-9_]{2,30}$/;
	var regex1=/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/
	var usr=document.forms["myForm"]["uname"].value;
	var paswrd=document.forms["myForm"]["upass"].value;
	var id1=document.forms["myForm"]["id"].value;
	var paskey=document.forms["myForm"]["pass"].value;
	
	if(usr=="")
	{
		var error="*please enter username";
		document.getElementById("usererr").innerHTML = error;
		flag = 1;
	}
	if(!regex.test(usr))
	{	
		var error="*please enter alphanumeric username";
		document.getElementById("usererr").innerHTML = error;
		flag = 1;
	}
	if(paswrd=="")
	{
		var error="*please enter password";
		document.getElementById("pwderr").innerHTML = error;
		flag = 1;
	}
	if(!regex1.test(paswrd))
	{
		var error="*enter valid password";
		document.getElementById("pwderr").innerHTML = error;
		flag = 1;
		
	}
	if(id1=="")
	{
		var error="*please enter ssid";
		document.getElementById("ssiderr").innerHTML = error;
		flag = 1;
	}

	if(!regex1.test(id1))
	{	
		var error="*please enter valid ssid";
		document.getElementById("ssiderr").innerHTML = error;
		document.getElementByClass("MainPan").width = document.getElementByClass("MainPan").width + '10'
		flag = 1;
	}


	if(paskey=="")
	{
		var error="*please enter passkey";
		document.getElementById("passerr").innerHTML = error;
		flag = 1;
	}
	if(!regex1.test(paskey))
	{	
		var error="*please enter valid passkey";
		document.getElementById("passerr").innerHTML = error;
		flag = 1;
	}
	
	if(flag==1)
	{
		return false;
	}		
	else
	{ 
		return true;
	}
	
}
