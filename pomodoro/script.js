$(document).ready(function(){
    $("#start-btn").click(function(){ // Add clock to page if it doesn't exist or pause the clock if it does. 
        if( $('#pomodoro-clock').length ) { 
            console.log("Clock already generated. Pausing Clock")
      } else { 
        var pomodoroClock = $('div')
        var clockDiv = $('.clock')
        pomodoroClock.attr('id', 'pomodoro-clock')
        pomodoroClock.append('Clock Image')
        pomodoroClock.addClass('subFlex centerText')
        clockDiv.addClass('columnFlex')
        clockDiv.append(clock)
      }
   }
   );
});

