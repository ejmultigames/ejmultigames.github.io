function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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
// need help?

//function requestHelp() {
//document.getElementById("troubleBtn").style.display = "none"
//document.getElementById("button").style.display = "fuck"
//document.getElementById("p04").style.display = "show"
//document.getElementById("li01").style.display = "show"
//}




//pc problem select---------------------------------------------------------------------------------------------------------

function pc1() {
	document.getElementById("problem").innerHTML = "PC/ Offsize content.<br><br> If you are having difficultys with content being offsize their could be many possible reasons.<br><br> 1. The webbrowser you are using dose not support or show what i have coded properly.<br> I suggest using crome!<br><br> 2. Your computer might not be reading something correctly. Or it may be too big or too small.<hr>"
}
function pc2() {
	document.getElementById("problem").innerHTML = "PC/ Content not showing.<br><br> If content is not showing their could be many reasons for this.<br><br> 1. The webbrowser your using dosn't support the content not shown.<br> I suggest using crome!<br><br> 2. The package that contains the content may not have correctly been implemented.<br> If this is the case i will more then likely be fixing this.<br><br> Otherwise the resources where incorrectly coded.<br> In this case please report the issue.<hr>"
}
function pc3() {
	document.getElementById("problem").innerHTML = "PC/ Download trouble.<br><br> If you are having troubles with the downloads please.<br><br> 1. Make shore your internet connection is good!<br><br> 2. Make shore you havent already downloaded it but didn't see.<br> In this case check your pc downloads folder.<br><br> 3. Try a different website browser.<br> I recommend crome!<br><br> If you still can not get the downloads please contact support.<hr>"
}
//iphone android problems select
function ia1() {
	document.getElementById("problem").innerHTML = "MOBILE/ Offsize content.<br><br> If you are having difficultys with content being offsize their could be many possible reasons.<br><br> 1. The webbrowser you are using dose not support or show what i have coded properly.<br> I suggest using crome!<br><br> 2. Your mobile might not be reading something correctly. Or it may be too big or too small or the content it needs to show.<br> If you have a computer this would be great!<hr>"
}
function ia2() {
	document.getElementById("problem").innerHTML = "MOBILE/ Content not showing.<br><br> If content is not showing on your mobile you may only be able to see it on a pc since mobile dose have some downsides, sorry.<hr>"
}
function ia3() {
	document.getElementById("problem").innerHTML = "MOBILE/ Download trouble.<br><br> If your wondering why you cant download, or can download but not see or use the program on mobile is proberly because you will be needing a pc for that silly, with python 3 or higher.<hr><!--<button>hi</button>-->"
}