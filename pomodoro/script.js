
        const startBtn = document.getElementById('start-btn');
        const countdownEl = document.getElementById('countdown');
        
        startBtn.addEventListener('click', () => {
          const numInput = document.getElementById('study-input');
          let count = parseInt(numInput.value);
          
          if (isNaN(count) || count < 0 || count > 120) {
            alert('Please enter a valid number between 0 and 100.');
            return;
          }
          
          countdownEl.innerHTML = count;
          const countdownInterval = setInterval(() => {
            count--;
            countdownEl.innerHTML = count;
            if (count === 0) {
              clearInterval(countdownInterval);
              countdownEl.innerHTML = 'Countdown Complete!';
            }
          }, 1000);
        });
