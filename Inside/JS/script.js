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
        // Nascondi l'overlay aggiungendo la classe. L'animazione son fatti del CSS
        $("#choosed-overlay").addClass("hidden")

        const extracted_index = random_index()
        const extracted_value = values[extracted_index]
        values[extracted_index] = -1;
        // Calcola l'id del valore corrispondente (E+cifra, es E10000), poi la transla via
        $("#E"+String(extracted_value)).delay(1000).addClass("translated")

        choosed_amount++
        // Se ho scelto 7 pacchi (1 iniziale + 6), passa alla fase successiva
        if(choosed_amount == 7) {
            phase3()
        }
        

    })

    $("#packages-container > img").click(function(self) {
        $(this).addClass("opacity-0")
        $("#choosed-overlay").removeClass("hidden")
        
    })


let values = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000]
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

    console.log("Scegli 6 pacchi")
}


function make_offert() {
    let offert = 0;
    for(let i = 0; i < 20; i++) {
        if(values[i] != -1) {
            offert += values[i]
        }
    }

    offert = offert/(20-choosed_amount)
    const offert_fifth = Math.floor(offert / 5000)
    offert = offert_fifth * 5000
    
    if(random_bool()) {
        console.log(offert + (offert/10))
    } else {
        console.log(offert - (offert/10))
    }

}


function random_bool() {
    const tenth_random = parseInt(Math.random() * 2)
    return (tenth_random==1)
}

function random_int(max) {
    return parseInt(Math.random()*max)
}


function random_index() {
    if(choosed_amount==20) return false;
    while(true) {
        const i = random_int(20);
        if(values[i] != -1) {
            return i;
        }
    }
}

function phase3() {
    console.log("PHASE 3")
    make_offert()
    
}


phase1()