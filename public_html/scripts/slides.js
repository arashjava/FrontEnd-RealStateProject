var numOfSlides=0;
var slideIndex = 1;
showDivs(slideIndex);      ///   display the first picture as default pic
window.onload = function() {
	id= getIdParam();
	
	var data = getData4OneMLS(id);
	
	var type = data[0];
	var address = data[1];
	var neighborhood = data[2];
	var bathroom = data[3];
	var bedroom = data[4];
	var space = data[5];
	var price = data[6];
	var description = data[7];
	var maintenanceFee = data[8];
	var amneties = data[9];
	var features = data[10];
	var contact=  data[11];
	var images=  data[12];
	
	showImages(images);      // the images array will be shown in this function
	document.getElementById("mls").innerText="Estate Information for MLS #" + id;
	document.getElementById("homeType").innerText= type+ " in "+ neighborhood;
	document.getElementById("pAddr").innerText= address;
	document.getElementById("bedroom").innerText= "No of bedroom(s): " + bedroom;
	document.getElementById("bathroom").innerText= "No of bathroom(s): " + bathroom;
	document.getElementById("maintenance").innerText= "Maintenance fee: $" + maintenanceFee;
	document.getElementById("desc").innerText= description;

	var x = document.getElementsByClassName("liAmneties")

	for (i=0 ;i <amneties.length ; i++){
	        x[i].innerText= amneties[i];
	    } 
	for (i=amneties.length; i<x.length;i++)	
	    {
		    x[i].style.display= "none";
		}

	xx = document.getElementsByClassName("liFeatures")

	for (i=0 ;i <features.length ; i++){
	        xx[i].innerText= features[i];
	    } 
	for (i=features.length; i<xx.length;i++)	
	    {
		    xx[i].style.display= "none";
		}

	document.getElementById("name").innerText= "Name : " + contact.name;
	document.getElementById("company").innerText= "Company : " + contact.company;
	document.getElementById("address").innerText= "Address : " + contact.address;
	document.getElementById("phone").innerText= "Phone : " + contact.phone;
	document.getElementById("website").innerText= "Website : " + contact.website;
 }

function showImages(images)   
{
    var x = document.getElementsByClassName("mySlides");
    var y = document.getElementsByClassName("w3-button demo");
    
    for (i=0; i< 7; i++)                                            //  we have 7 pics designed in html, so we picked 8 at maximum
    {
    if (images[i] != null) {

        x[i].src="images/estate/" +id + "/" + images[i];
        numOfSlides ++;
      } else {

      	x[i].style.display= "none";
      	y[i].style.display= "none";

      }
    }
} 


function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) 
{
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var _picArrayLength= numOfSlides;

  
if (n > _picArrayLength) {slideIndex = 1;}    
else if (n < 1) {slideIndex = _picArrayLength;}
//else 
//	slideIndex=1;
for (i = 0; i < _picArrayLength; i++) 
  {
     x[i].style.display = "none";  
  }

for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-red", "");
  }   
  

x[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " w3-red";
}


function getData4OneMLS(mlsId) 
{
    var _type, _address, _neighborhood, _bathroom, _bedroom, _space, _price,  _maintenanceFee, amenities,
    _features, _contact ;     //   non arrays variables
    var _description, _maintenanceFee;       // inside detail array
    var amenities= [];                       // inside detail array
    var features= [];						// inside detail array
    var contact= [];						// inside detail array:  name, company, address, phone, website
    var _images=[];                         // images available
    for (var key in RealStateData) 
    {
    	 if (RealStateData[key].id == mlsId) 
    	 {
    		 _type= RealStateData[key].type;
    		 _address=  RealStateData[key].address;
    		 _neighborhood=  RealStateData[key].neighborhood;
    		 _bathroom=  RealStateData[key].bathroom;
    		 _bedroom=  RealStateData[key].bedroom;
    		 _space=  RealStateData[key].space;
    		 _price=  RealStateData[key].price;
    		 _description=  RealStateData[key].detail.description;
    		 _maintenanceFee=  RealStateData[key].detail.maintenanceFee;
    		 _amenities=  RealStateData[key].detail.amenities;
    		 _features=  RealStateData[key].detail.features;
    		 _contact=  RealStateData[key].detail.contact;
    		 _images=  RealStateData[key].detail.images;

 		    
   	    }
    }
    return [_type, _address, _neighborhood, _bathroom, _bedroom, _space, _price, _description,_maintenanceFee, _amenities,
    	    _features, _contact, _images];
}


function getIdParam(){

	var x = location.search;        // get the parameter   (ex. ?id=3233242)
	whereisEq= x.indexOf('=');        //  find position of "="
	id=x.substr(whereisEq+1);      //  extract id from the parameter

	return id;
}
