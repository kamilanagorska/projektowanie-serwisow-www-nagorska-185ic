function updateWatch(){
    var timeNow = new Date();
    var h = ((timeNow.getHours()>12)?timeNow.getHours()-12:timeNow.getHours())/12*360+timeNow.getMinutes()/60*30;
    var m = timeNow.getMinutes()/60*360;
    var s = timeNow.getSeconds()/60*360;
    $("#hour").css("transform","rotate("+h+"deg)");
    $("#minute").css("transform","rotate("+m+"deg)");
    $("#sec").css("transform","rotate("+s+"deg)");
    console.log(h+":"+m+":"+s);
}
$(document).ready(function(){
    updateWatch();
    setInterval(updateWatch,1000);        
});