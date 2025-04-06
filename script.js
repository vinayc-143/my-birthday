// Countdown
const countdownDate = new Date("April 9, 2025 00:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("timer").innerText = "Happy Birthday, My Love!";
  
    // Confetti burst animation
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };
  
    const intervalConfetti = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(intervalConfetti);
      }
  
      confetti(Object.assign({}, defaults, {
        particleCount: 50,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2
        }
      }));
    }, 250);
  }
}, 1000);

// Typewriter Love Letter
const loveMessage = `
My Sweetheart,

From the moment we met, you’ve filled my life with joy and endless love.
I want you to know that you mean the world to me.

On your special day, I just want to remind you how deeply I love you.
You're not just my girlfriend—you are my dream, my joy, and my forever.

Happy Birthday, My Love Ruchika!

Yours always,
Vinay
`;

let i = 0;
function typeWriter() {
  if (i < loveMessage.length) {
    document.getElementById("typewriter").innerHTML += loveMessage.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();