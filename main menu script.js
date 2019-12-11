//nav bar code below----------------------------------------------------------------------------------------------------
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 
 //window.alert('hello their!'); sends an error/ normal message to a website.

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