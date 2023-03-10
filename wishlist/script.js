/**
Additional Functionality:
    Be able to drag and drop based on priority

    category centered-text toggle-item flex-item horizontal-flex hidden
 */

$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $(this).next(".toggle-item").toggleClass("hidden");
    });
});