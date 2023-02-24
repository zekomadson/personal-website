
$(document).ready(function(){
    $(".toggle-button").click(function(){
        $(this).next("div").toggleClass("hide-content");
    });
});
