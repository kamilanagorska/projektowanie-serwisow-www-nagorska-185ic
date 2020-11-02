"use strict";
var images = document.querySelectorAll("img.card-img-top");
images.forEach(function(imgs) {
    imgs.addEventListener("click", bigView);   
});
/*wyswietlaniemodal*/
function bigView() {
$(document).ready(function() {
    $("#myModal").modal();
});
}