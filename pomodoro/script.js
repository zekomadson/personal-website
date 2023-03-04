$(document).ready(function(){
    $("#start-btn").click(function(){ 
        if($(this).hasClass('run')){
        $(this).text('Pause Clock')
    } else {
        $(this).text('Resume Clock')
    }
        $(this).toggleClass('run')
    });
});
