
$(document).ready(function(){
    $(".toggle-button").click(function(){
        $(this).next("div").toggleClass("hide-content");
    });
});

function loadScreen(){
    var screenWidth = window.innerWidth;
    // Check the screen width and load the appropriate HTML file
    if (screenWidth < 768) {
    // Load the mobile HTML file
        document.location.href = "mobile.html";
    } else {
    // Load the desktop HTML file
        document.location.href = "desktop.html";  
    }
}


loadScreen();