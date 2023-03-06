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
        var taskDiv = $("<div></div>"),
        newTask = $("<h4>New task</h4>"),
        removeTask = $("<h4>Remove task</h4>")
        taskDiv.addClass('row-flexbox-container')
        removeTask.addClass('flexbox-item-ra')
        taskDiv.append(newTask)
        taskDiv.append(removeTask)
        $("#task").append(taskDiv)
});
        
});


// Next Steps: create an object called a task. has all these elements and attributes and you just add a new task on click.