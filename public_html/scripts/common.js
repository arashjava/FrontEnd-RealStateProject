

$(document).ready(function(){
	var _date = new Date();
	document.getElementById("dateTime").innerHTML = _date.toUTCString()+ 
          "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "&copy; All rights reserved to Arash Shadmani - 2017" +
            "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "&emsp;" + "&emsp;" +"&emsp;" +"&emsp;" +"&emsp;" +
	  "Address: Somewhere in Old Montreal...." ;

	$("#dateTime").slideDown(1000);
	$("#panel").slideDown(1000);
});