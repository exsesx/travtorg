function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(function (){
    console.log('owlebala');
     $('.owl-carousel').owlCarousel({
         items : 1,
         itemsDesktop : [1199,3],
         itemsDesktopSmall : [979,3],
         nav:true,
         navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
     });

     if(getCookie('popup') !== 'true') {
        $("#bg").fadeTo(1000, 0.4).css('position', 'fixed').css('pointer-events', 'none');
        $('.form-container').css('display', 'flex');
        setCookie('popup', true, 1);
    }
 });

$("#yes").click(function(){
    $(".form-container").hide();
    $("#bg").css("position", "inherit").css("opacity", "1").css("pointer-events", "auto");
});

$("#no").click(function(){
    window.open("http://www.google.com", "_self");
});