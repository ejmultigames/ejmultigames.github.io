//function setCookie(cname, cvalue, exdays) {
//	var d = new Date();
//	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//	var expires = "expires="+d.toUTCString();
//	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//}
//	
//function getCookie(cname) {
//	var name = cname + "=";
//	var ca = document.cookie.split(';');
//	for(var i = 0; i < ca.length; i++) {
//		var c = ca[i];
//		while (c.charAt(0) == ' ') {
//			c = c.substring(1);
//		}
//		if (c.indexOf(name) == 0) {
//			return c.substring(name.length, c.length);
//		}
//    }
//	 return "";
//}
//
//function checkCookie() {
//	var user = getCookie("username");
//	if (user != "") {
//		alert("welcome again " + user);
//	} else {
//	  user = prompt("please enter your name:", "");
//	  if (user != "" && user != null) {
//		setCookie("username", user, 365);
//	  }
//	}
//}




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
///////////////////////////////////////////////////////////////
function openNav2() {
  document.getElementById("mySidenav2").style.width = "250px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var TimesDownloaded1 = 0;
var TimesDownloaded2 = 0;
var TimesDownloaded3 = 0;
var TimesDownloaded4 = 0;

function change1() {
	TimesDownloaded1 += 1;
	document.getElementById("Download1").innerHTML = "downloaded- v0.1.0: "+ TimesDownloaded1 +" times. thanks for downloading enjoy!";
}
function change2() {
	TimesDownloaded2 += 1;
	document.getElementById("Download2").innerHTML = "downloaded- v0.2.0: "+ TimesDownloaded2 +" times. thanks for downloading enjoy!";
}
function change3() {
	TimesDownloaded3 += 1;
	document.getElementById("Download3").innerHTML = "downloaded- v1.2.0: "+ TimesDownloaded3 +" times. thanks for downloading enjoy!";
}
function change4() {
	TimesDownloaded4 += 1;
	document.getElementById("Download4").innerHTML = "downloaded- v1.3.0: "+ TimesDownloaded4 +" times. thanks for downloading enjoy!";
}
///////////////////////////////////////////////////////////////////////////

var TimesDownloadedApp1 = 0;

function changeApp1() {
	TimesDownloadedApp1 += 1;
	document.getElementById("downloadApp1").innerHTML = "downloaded- music player v0.0.0: "+ TimesDownloadedApp1 +" times. thanks for downloading enjoy!";
}

 //search button below---------------------------------------------------------------------------------------------------

 // when user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		txtValue = a[i].textContent || a[i].innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1)
{
		a[i].style.display = "";
	  } else {
	   	a[i].style.display = "none";
	  }
	}
}