var x = document.getElementsByClassName("picSlides")
//x.style.display="none"
_NoOfPics = mainPageImages.length;
for (var key in mainPageImages)        // data in the imagesInMainPage file
{
     x[key].src="images/"+mainPageImages[key];
     x[key].style.display="";
}
for (i= _NoOfPics ; i< x.length ; i++)        // data in the imagesInMainPage file
{
//  alert(i);
 x[i].style.display="none";
}


var myIndex = 0;
carousel();

//for (i= 0 ; i< 12 ; i++) {x[i].style.display="none";}
	

function carousel() {
    var i;
 //   var x = document.getElementsByClassName("picSlides");
    for (i = 0; i < _NoOfPics; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > _NoOfPics) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 1500);
}