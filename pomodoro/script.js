$(document).ready(function(){
    $("#start-btn").click(function(){ 
        $(this).toggleClass('run')
        if($(this).hasClass('run')){
            $(this).text('Pause')
        } else {
            $(this).text('Resume')
        }
        
    })

    $("#add-task").click(function(){ 
        $("#task").append("<p>New Task")
    });
        
});
