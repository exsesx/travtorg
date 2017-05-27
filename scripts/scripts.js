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

function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();

$(document).ready(function (){
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles/safari.css';
    document.head.insertBefore(link, document.head.children[3]);
    //document.write('<link href="styles/safari.css" rel="stylesheet" type="text/css"/>');
}

    console.log('wtf');
     $('#collections-owl').owlCarousel({
         items : 4,
         loop: true,
         itemsDesktop : [1199,3],
         itemsDesktopSmall : [979,3],
         nav:true,
         navText : ["<img src='images/arrows/left-arrow.png'>","<img src='images/arrows/right-arrow.png'>"]
     });
    $('#vendors-owl').owlCarousel({
         items : 5,
         loop: false,
         itemsDesktop : [1199,3],
         itemsDesktopSmall : [979,3],
         rewind: true,
         nav:true,
         navText : ["<img src='images/arrows/left-arrow.png'>","<img src='images/arrows/right-arrow.png'>"]

          });

     if(getCookie('popup') !== 'true') {
        $("body").css('pointer-events', 'none');
        $("#bg").css('position', 'fixed');
        $(".form-wrap").css('pointer-events', 'auto');
        $('.form-container').css('display', 'flex');
    }
    else {
            $("#bg").hide();
            $("body").css('pointer-events', 'auto');
        }
 });


$(document).keyup(function (event) {    
    var isCollectionsInView = Utils.isElementInView($('#collections-owl'), true);
    var isVendorsInView = Utils.isElementInView($('#vendors-owl'), true);

// 37 - left  39 - right

    if (event.keyCode == 37 && isCollectionsInView) 
    {
       $('#collections-owl .owl-prev').trigger('click');
    } 

    else if (event.keyCode == 39 && isCollectionsInView) {
       $('#collections-owl .owl-next').trigger('click');
    }

        if (event.keyCode == 37 && isVendorsInView) 
    {
       $('#vendors-owl .owl-prev').trigger('click');
    } 

    else if (event.keyCode == 39 && isVendorsInView) {
       $('#vendors-owl .owl-next').trigger('click');
    }

});

$("#yes").click(function(){
    $(".form-container").hide();
    $("#bg").hide();
    $("body").css('pointer-events', 'auto');
    setCookie('popup', true, 1);
});

$("#no").click(function(){
    window.open("http://www.google.com", "_self");
});