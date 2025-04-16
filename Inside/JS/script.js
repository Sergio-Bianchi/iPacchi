$("#choose-overlay > img").click(function() {
    lockClick()
    phase2()
})

function lockClick() {
    console.log("CLICK LOCKED")
    $("#block-click").removeClass("hidden")
}

function unlockClick() {
    console.log("CLICK UNLOCKED")
    $("#block-click").addClass("hidden")
}

const scrollCheck = document.querySelector("#scroll-check");
const keyboardCheck = document.querySelector("#keyboard-check");

let last_extracted = -1;
let last_element_extracted = null

if(outerHeight != innerHeight || outerWidth != innerWidth || window.devicePixelRatio != 1) {
    console.log("SET FULLSCREEN 100%")
}

$("#choosed-overlay > img").click(function() {
    // Nascondi l'overlay aggiungendo la classe. L'animazione son fatti del CSS
    $("#choosed-overlay").fadeOut()
    lockClick()
    // Calcola l'id del valore corrispondente (E+cifra, es E10000), poi la transla via
    sleep(1000).then(() => {
        $("#E"+String(last_extracted)).addClass("translated")
        unlockClick()
    })
    $(last_element_extracted).addClass("opacity-0")
    $(last_element_extracted).attr("src", "../Public/IMG/boxes/"+last_extracted+".png")
    $(last_element_extracted).removeClass("opacity-0")


    choosed_amount++
    // Se ho scelto 7 pacchi (1 iniziale + 6), passa alla fase successiva
    // TODO, rimettere a 7 sennò esplode
    if(choosed_amount == 7) {
        phase3()
    }

    if(choosed_amount == 10) {
        phase3()
    }

    if(choosed_amount == 13) {
        phase3()
    }

    if(choosed_amount > 13 && choosed_amount < 20) {
        phase3()
    }

})

$("#packages-container > img.clickable").click(function(self) {
    // Controllo per verificare se il pacco è ancora effettivamente da clickare (nascondendolo e basta potevi cliccarlo quante volte volevi )
    if(this.className == "pack clickable") {
        const extracted_index = random_index()
        const extracted_value = values[extracted_index]
        values[extracted_index] = -1;

        last_extracted = extracted_value
        last_element_extracted = this

        $(this).removeClass("clickable")
        $("#choosed-overlay > img").attr("src", "../Public/IMG/boxes/"+extracted_value+".png")
        lockClick()
        // TODO DA RIDURRE A 5000
        sleep(1000).then(() => {
            // $(this).addClass("opacity-0")
            $("#choosed-overlay").fadeIn(500)
            unlockClick()
        })
    }
})




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let values = [0, 1, 5, 10, 20, 50, 75, 100, 200, 500, 5000, 10000, 15000, 20000, 30000, 50000, 75000, 100000, 200000, 300000]
let choosed_amount = 1
let last_offert = -1

let tipo_offerta = null
let next_phase = null
let last_choice = null
let player_name = (new URLSearchParams(document.location.search)).get("name")


function phase1(){

    console.log("PHASE 1")
    $("#choosed").fadeOut(0)
    $("#offerte-sx").fadeOut(0)
    $("#offerte-dx").fadeOut(0)
    $("#packages-container").fadeOut(0)
    $("#choose-overlay").fadeOut(0)
    $("#choosed-overlay").fadeOut(0)
    $("#dialogue").fadeOut(0)
    $("#prendi-lascia").fadeOut(0)
    $("#bubble-text").text("Ciao "+ player_name+  "! Benvenuto nel tempio!\n Scegli un pacco")

    $("#jones").delay(1000).removeClass("left")
    $("#dialogue").delay(1500).fadeIn()

    sleep(3000).then(() => {
        $("#jones").addClass("left")
        $("#dialogue").fadeOut()
    })

    $("#choose-overlay").delay(4000).fadeIn(500)

    console.log("Scegli un pacco")
}


function phase2() {
    console.log("PHASE 2")

    $("#choose-overlay").delay(1000).fadeOut()
    sleep(2000).then(() => {
        $("#jones").removeClass("left")
        $("#bubble-text").text("Perfetto! Ottima scelta "+player_name+" \n Ora scegli 6 pacchi")
        $("#dialogue").delay(1500).fadeIn(300)
        $("#bubble-text").fadeIn(300)
        $("#dialogue").delay(1500).fadeOut()
        sleep(3500).then(()=>$("#jones").addClass("left"))
    })

    sleep(6000).then(() => {
        $("#choosed").fadeIn(1000)
        $("#offerte-sx").delay(1000).fadeIn(1000)
        $("#offerte-dx").delay(1000).fadeIn(1000)
        $("#packages-container").delay(500).fadeIn(1000)
        unlockClick()
    })

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
        return offert + (offert/10)
    } else {
        return offert - (offert/10)
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


function hideJones() {
    $("#dialogue").fadeOut()
    $("#jones").addClass("left")
    $(this).delay(2000).dequeue()
}

function showJones(timeout) {
    sleep(timeout).then(()=>{
        $("#jones").removeClass("left")
        $("#dialogue").delay(2000).fadeIn()
    })
}

function phase3() {
    console.log("PHASE 3")
    last_offert = make_offert()
    lockClick()
    sleep(1000).then(() => {
        $("#jones").removeClass("left")
        $("#dialogue").delay(1500).fadeIn()
        $("#bubble-text").text("Ottimo. Ora ti farò un'offerta "+player_name)
        lockClick()

        sleep(4000).then(() => {
            if(random_bool() && false) {
                $("#bubble-text").text("OK, adesso scegli un pacco con la quale sostituire il tuo")
                hideJones(3000)
                
                
            } else {
                $("#bubble-text").text(last_offert + " €, prendere o lasciare")
                $(this).delay(4000).queue(hideJones)
                $("#prendi-lascia-offert").text(last_offert + " €")
                $("#prendi-lascia").delay(6000).fadeIn()
                sleep(6000).then(()=>unlockClick())

                $("#prendi-button").click(function() {
                    $("#prendi-lascia").delay(1000).fadeOut()
                    // TODO
                    // APRIMENTO PACCO TUO STESSO YODA SONO IO 
                })
                $("#lascia-button").click(function() {
                    lockClick()
                    $("#bubble-text").text("Come non detto... Riprendiamo il nostro gioco!")
                    $("#prendi-lascia").delay(1000).fadeOut()
                    showJones(3000) 
                    let phrase = "Scegli tre pacchi "+player_name
                    if(choosed_amount >= 13) {
                        phrase = "Scegli un pacco "+player_name
                    }
                    sleep(8000).then(() => {
                        $("#bubble-text").text(phrase)
                        $(this).delay(2000).queue(hideJones)
                        sleep(4000).then(()=>unlockClick())
                    })
                    
                })
            }
        })
    })
}


function phase4() {
    console.log("PHASE 4")
}




phase1()