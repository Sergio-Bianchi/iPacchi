

$("#title").click(function(){
    $("img").addClass("zoomed")
    $("#title").addClass("zoomed")
    setInterval(function() {
        $(location).prop('href', '../Inside/index.html')
    },1000);
});



