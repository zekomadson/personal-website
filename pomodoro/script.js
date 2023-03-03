$("#start-btn").click(function(){ 
    if( $('#pomodoro-clock').length ) {
            var pc = $('#pomodoro-clock')
                  if(pc.hasClass("running")){
            pc.removeClass("running")
          console.log("pause")
        } else {
            pc.addClass("running")
          console.log("run again")
        }
    } else { 
        console.log("here1")
      $(".clock").append($("<p>Clock Running!</p>")).addClass('centerText running').attr('id', 'pomodoro-clock');
    }
 }
);
 
 
 
 /**
 When you click on it:
 - Check if it's the first time:
     - if it is, add the p element
  - if it is not, toggle the display between "Clock is running", "Clock is paused"

 **/