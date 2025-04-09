$("#jones").click(function(){
    $("#jones").addClass("bottom");
});

$("#choose-overlay > img").click(function() {
    phase2()
})

const scrollCheck = document.querySelector("#scroll-check");
const keyboardCheck = document.querySelector("#keyboard-check");

if(outerHeight != innerHeight || outerWidth != innerWidth || window.devicePixelRatio != 1) {
    console.log("SET FULLSCREEN 100%")
}

$("#choosed-overlay > img").click(function() {
    $("#choosed-overlay").addClass("hidden")
    choosed_amount++

})

$("#packages-container > img").click(function(self) {
    $(this).addClass("opacity-0")
    $("#choosed-overlay").removeClass("hidden")
    if(choosed_amount == 7) {
        phase3()
    }
})


let values = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 750000, 100000, 200000, 300000]
let choosed_amount = 1

function phase1(){
    console.log("PHASE 1")

    $("#choosed").fadeOut(0)
    $("#offerte-sx").fadeOut(0)
    $("#offerte-dx").fadeOut(0)
    $("#packages-container").fadeOut(0)

    console.log("Scegli un pacco")
}


function phase2() {
    console.log("PHASE 2")

    $("#choose-overlay").delay(1000).addClass("opacity-0")
    $("#choosed").delay(2000).fadeIn(1000)
    $("#offerte-sx").delay(1100).fadeIn(1000)
    $("#offerte-dx").delay(1100).fadeIn(1000)
    $("#packages-container").delay(1100).fadeIn(1000)

    console.log("Scegli 3 pacchi")
}

function phase3() {
    console.log("PHASE 3")

}


phase1()