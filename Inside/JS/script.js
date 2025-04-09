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
})


let values = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 750000, 100000, 200000, 300000]
let choosed_amount = 0

function phase1(){
    $("#choosed").fadeOut(10)
    $("#offerte-sx").fadeOut(10)
    $("#offerte-dx").fadeOut(10)
    $("#packages-container").fadeOut(10)
    console.log("Scegli un pacco")
}


async function phase2() {

    let datetime1 = new Date().getTime()
    let datetime2 = datetime1 + 5000

    $("#choose-overlay").addClass("opacity-0")
    $("#choosed").delay(2000).fadeIn(1000)
    $("#offerte-sx").delay(2000).fadeIn(1000)
    $("#offerte-dx").delay(2000).fadeIn(1000)
    $("#packages-container").delay(2000).fadeIn(1000)

    console.log("Scegli 3 pacchi")

    
}




phase1()