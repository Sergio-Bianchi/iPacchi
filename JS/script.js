

$("#title > h1").click(function(){
    $("img").addClass("zoomed")
    $("#title").addClass("zoomed")
    setInterval(function() {
        $(location).prop('href', '../Inside/index.html?name='+$("#player-name").val())
    },1000);
});



