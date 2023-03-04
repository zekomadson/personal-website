$(document).ready(function(){
    $("#start-btn").click(function(){ 
        $(this).toggleClass('run')
        if($(this).hasClass('run')){
            $(this).text('Pause')
        } else {
            $(this).text('Resume')
        }
        
    });
});
