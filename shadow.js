const countdownElement = document.getElementById("countdown");

const targetDate = new Date(new Date().getFullYear(), 5, 30, 0, 0, 0); // Červen = měsíc 5

function updateCountdown() {
  const now = new Date();
  const timeLeft = targetDate - now;

  if (timeLeft <= 0) {
    countdownElement.textContent = "Čas vypršel!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  countdownElement.textContent = `${days} dní ${hours} hodin ${minutes} minut ${seconds} sekund`;
}

// Spustíme ihned a pak každou sekundu
updateCountdown();
const timer = setInterval(updateCountdown, 1000);

const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
