$("#jones").click(function(){
    $("#jones").addClass("bottom");
});


const scrollCheck = document.querySelector("#scroll-check");
const keyboardCheck = document.querySelector("#keyboard-check");


if(outerHeight != innerHeight || outerWidth != innerWidth || window.devicePixelRatio != 1) {
    console.log("SET FULLSCREEN 100%")
}
