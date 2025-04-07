document.addEventListener('DOMContentLoaded', function() {
  // Set the birthday date - April 9, 2025
  const birthdayDate = new Date('April 9, 2025 00:00:00').getTime();
  
  // Add eyes and nose to cartoon characters
  const characters = document.querySelectorAll('.character');
  characters.forEach(character => {
      const eyes = document.createElement('div');
      eyes.className = 'eyes';
      character.appendChild(eyes);
      
      const nose = document.createElement('div');
      nose.className = 'nose';
      character.appendChild(nose);
      
      const body = document.createElement('div');
      body.className = 'body';
      character.appendChild(body);
  });
  
  // Update the countdown every second
  const countdownTimer = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the birthday date
      const distance = birthdayDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Display the result
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
      
      // If the countdown is finished, show celebration
      if (distance < 0) {
          clearInterval(countdownTimer);
          document.getElementById('days').textContent = '00';
          document.getElementById('hours').textContent = '00';
          document.getElementById('minutes').textContent = '00';
          document.getElementById('seconds').textContent = '00';
          
          startCelebration();
      }
  }, 1000);
  
  // Function to start celebration
  function startCelebration() {
      const celebration = document.getElementById('celebration');
      celebration.classList.remove('hidden');
      celebration.style.opacity = '1';
      
      // Create balloons
      createBalloons();
      
      // Create confetti
      createConfetti();
      
      // Add click event to blow candle button
      document.getElementById('blow-candle').addEventListener('click', blowCandle);
      
      // Add click event to gifts
      const gifts = document.querySelectorAll('.gift');
      gifts.forEach(gift => {
          gift.addEventListener('click', function() {
              if (!this.classList.contains('opened')) {
                  this.classList.add('opened');
                  showGiftMessage(this.getAttribute('data-message'));
              }
          });
      });
  }
  
  // Function to blow candle
  function blowCandle() {
      const flame = document.getElementById('candle-flame');
      flame.classList.add('blown');
      
      // Create more confetti when candle is blown
      createConfetti(100);
      
      // Change button text
      document.getElementById('blow-candle').textContent = 'Yay! Happy Birthday!';
      document.getElementById('blow-candle').disabled = true;
  }
  
  // Function to create balloons
  function createBalloons() {
      const balloonsContainer = document.getElementById('balloons-container');
      const colors = ['#4a6fa5', '#feca57', '#54a0ff', '#5f27cd', '#48dbfb', '#1dd1a1'];
      
      for (let i = 0; i < 30; i++) {
          const balloon = document.createElement('div');
          balloon.className = 'balloon';
          
          // Random position
          const posX = Math.random() * 100;
          
          // Random color
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          // Random delay
          const delay = Math.random() * 15;
          
          // Random duration
          const duration = 15 + Math.random() * 10;
          
          balloon.style.left = `${posX}%`;
          balloon.style.backgroundColor = color;
          balloon.style.animationDelay = `${delay}s`;
          balloon.style.animationDuration = `${duration}s`;
          
          balloonsContainer.appendChild(balloon);
      }
  }
  
  // Function to create confetti
  function createConfetti(count = 50) {
      const confettiContainer = document.getElementById('confetti-container');
      const colors = ['#feca57', '#54a0ff', '#5f27cd', '#48dbfb', '#1dd1a1', '#ff6b6b', '#ff9ff3'];
      
      for (let i = 0; i < count; i++) {
          const confetti = document.createElement('div');
          confetti.className = 'confetti';
          
          // Random position
          const posX = Math.random() * 100;
          
          // Random color
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          // Random size
          const size = Math.random() * 10 + 5;
          
          // Random rotation
          const rotation = Math.random() * 360;
          
          // Random delay
          const delay = Math.random() * 5;
          
          // Random duration
          const duration = 5 + Math.random() * 5;
          
          confetti.style.left = `${posX}%`;
          confetti.style.width = `${size}px`;
          confetti.style.height = `${size}px`;
          confetti.style.backgroundColor = color;
          confetti.style.transform = `rotate(${rotation}deg)`;
          confetti.style.animationDelay = `${delay}s`;
          confetti.style.animationDuration = `${duration}s`;
          
          // Random shape
          const shapeRandom = Math.floor(Math.random() * 3);
          if (shapeRandom === 0) {
              confetti.style.borderRadius = '50%';
          } else if (shapeRandom === 1) {
              confetti.style.borderRadius = '0';
          } else {
              confetti.style.width = '0';
              confetti.style.height = '0';
              confetti.style.borderLeft = `${size/2}px solid transparent`;
              confetti.style.borderRight = `${size/2}px solid transparent`;
              confetti.style.borderBottom = `${size}px solid ${color}`;
              confetti.style.backgroundColor = 'transparent';
          }
          
          confettiContainer.appendChild(confetti);
          
          // Remove confetti after animation completes
          setTimeout(() => {
              confetti.remove();
          }, (delay + duration) * 1000);
      }
  }
  
  // Function to show gift message
  function showGiftMessage(message) {
      const giftMessage = document.getElementById('gift-message');
      giftMessage.innerHTML = `
          <h3>You found a gift!</h3>
          <p>${message}</p>
          <button id="close-message">Close</button>
      `;
      
      giftMessage.classList.remove('hidden');
      giftMessage.style.opacity = '1';
      
      document.getElementById('close-message').addEventListener('click', function() {
          giftMessage.style.opacity = '0';
          setTimeout(() => {
              giftMessage.classList.add('hidden');
          }, 500);
      });
  }
  
  // Add hover effect to sticky notes
  const stickyNotes = document.querySelectorAll('.sticky-note');
  stickyNotes.forEach(note => {
      note.addEventListener('mouseenter', function() {
          this.style.zIndex = '10';
      });
      
      note.addEventListener('mouseleave', function() {
          setTimeout(() => {
              this.style.zIndex = '1';
          }, 300);
      });
  });
  
  // For testing purposes - uncomment to test celebration
  //startCelebration();
});
