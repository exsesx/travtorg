 $(document).ready(function (){

    $("#bg").fadeTo(1000, 0.4);
    $(".form-wrap").fadeIn();
 });

$("#yes").click(function(){
    $(".form-container").hide();
    $("#bg").css("position", "inherit");
    $("#bg").css("opacity", "1");
});

$("#no").click(function(){
    window.open("http://www.google.com", "_self");
});

// $("button").click(function(){
//     $("p:first").addClass("");
// });

// $("button").click(function(){
//     $("p:first").removeClass("");
// });