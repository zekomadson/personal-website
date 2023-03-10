/**
Additional Functionality:
    Be able to drag and drop based on priority
 */

$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $(this).next(".toggle-item").toggleClass("hidden");
    });
});