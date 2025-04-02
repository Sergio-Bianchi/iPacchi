$("#jones").click(function(){
    $("#jones").addClass("bottom");
});

$("#choose-overlay > img").click(function() {
    $("#choose-overlay").fadeOut(1000);
})

const scrollCheck = document.querySelector("#scroll-check");
const keyboardCheck = document.querySelector("#keyboard-check");

if(outerHeight != innerHeight || outerWidth != innerWidth || window.devicePixelRatio != 1) {
    console.log("SET FULLSCREEN 100%")
}

$("#choosed-overlay > img").click(function() {
    $("#choosed-overlay").addClass("hidden")
})

$("#packages-container > img").click(function(self) {
    $(this).addClass("opacity-0")
    $("#choosed-overlay").removeClass("hidden")
})