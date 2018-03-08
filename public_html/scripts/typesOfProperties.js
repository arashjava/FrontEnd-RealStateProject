window.onload = function() 
{
	initData();
}



function initData() 
{
    var table = document.getElementById("myTable");

    var i=0;

    var cellID='';
    var str = "";
    var row = table.insertRow(0); 
    var cell1 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell1 = row.insertCell(2);
    var cell1 = row.insertCell(3);
    var cell1 = row.insertCell(4);
    var cell1 = row.insertCell(5);

    for (var key in RealStateData) 
 
       {
     		row =   table.insertRow(i+2);
	        cell1=  row.insertCell(0);
 		    cell2=  row.insertCell(1);
 		    cell3=  row.insertCell(2);
 		    cell4=  row.insertCell(3);
 		    cell5=  row.insertCell(4);
 		    cell6=  row.insertCell(5);
 		    
 		    
 		    cellID= RealStateData[key].id    
   	   		cell1.innerHTML =  "<button type='button' class ='MLSButton' id=" +cellID +">"  + cellID + "</button>";
   	                    
 		    cell1.onclick =function(){
 	    	giveDetails();
 //		    	window.open("slideIndicators.html?id="+cellID);
 			}; 
  		   
  	   		cell2.innerHTML = RealStateData[key].type	
   	        cell3.innerHTML = RealStateData[key].price;
   	        cell4.innerHTML = RealStateData[key].bedroom;
   	        cell5.innerHTML = RealStateData[key].bathroom;
   	        cell6.innerHTML = RealStateData[key].neighborhood;
   	    }
}

function filterList(whichOne, input) {
  var inputf, filter, table, tr, td, i;
  input = document.getElementById(input);

  filter = input.value.toUpperCase();
  
//  x= document.getElementsByTagName("input");
//  for (i=0; i< x.length; i++){
//	  if (x[i].id != input)
//		  x[i].innerHTML=''; 
//  }

  
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[whichOne];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}



function giveDetails() {
  
	$('#myTable').unbind().on('click', 'button', function(e) {
		   var id= e.target.id;
		   window.open("slides.html?id="+id);

	});
}






