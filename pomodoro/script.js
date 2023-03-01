
 const startBtn = document.getElementById('start-btn');
 const countdownEl = document.getElementById('countdown');
 
 startBtn.addEventListener('click', () => {
   const numInput = document.getElementById('study-input');
   let totalSeconds = parseInt(numInput.value) * 60;
   
   if (isNaN(totalSeconds) || totalSeconds < 60 || totalSeconds > 3600) {
     alert('Please enter a valid number between 1 and 60.');
     return;
   }
   
   const countdownInterval = setInterval(() => {
     let minutes = Math.floor(totalSeconds / 60);
     let seconds = totalSeconds % 60;
     
     countdownEl.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}`;
     
     if (totalSeconds === 0) {
       clearInterval(countdownInterval);
       countdownEl.innerHTML = 'Countdown Complete!';
     }
     
     totalSeconds--;
   }, 1000);
 });