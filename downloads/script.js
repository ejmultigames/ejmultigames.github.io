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
var TimesDownloaded5 = 0;
var TimesDownloaded6 = 0;
var TimesDownloaded7 = 0;
var TimesDownloaded8 = 0;
var TimesDownloaded9 = 0;
var TimesDownloaded10 = 0;
var TimesDownloaded11 = 0;
var TimesDownloaded12 = 0;

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
function change5() {
	TimesDownloaded5 += 1;
	document.getElementById("Download5").innerHTML = "downloaded- v1.4.0: "+ TimesDownloaded5 +" times. thanks for downloading enjoy!";
}
function change6() {
	TimesDownloaded6 += 1;
	document.getElementById("Download6").innerHTML = "downloaded- v1.5.0: "+ TimesDownloaded6 +" times. thanks for downloading enjoy!";
}
function change7() {
	TimesDownloaded7 += 1;
	document.getElementById("Download7").innerHTML = "downloaded- v2.5.0: "+ TimesDownloaded7 +" times. thanks for downloading enjoy!";
}
function change8() {
	TimesDownloaded8 += 1;
	document.getElementById("Download8").innerHTML = "downloaded- v2.6.0: "+ TimesDownloaded8 +" times. thanks for downloading enjoy!";
}
function change9() {
	TimesDownloaded9 += 1;
	document.getElementById("Download9").innerHTML = "downloaded- Windows v2.7.0: "+ TimesDownloaded9 +" times. thanks for downloading enjoy!";
}
function change10() {
	TimesDownloaded10 += 1;
	document.getElementById("Download10").innerHTML = "downloaded- Mac os v2.7.0: "+ TimesDownloaded10 +" times. thanks for downloading enjoy!";
}
function change11() {
	TimesDownloaded11 += 1;
	document.getElementById("Download11").innerHTML = "downloaded- Windows v3.7.0: "+ TimesDownloaded11 +" times. thanks for downloading enjoy!";
}
function change12() {
	TimesDownloaded12 += 1;
	document.getElementById("Download12").innerHTML = "downloaded- Mac os v3.7.0: "+ TimesDownloaded12 +" times. thanks for downloading enjoy!";
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