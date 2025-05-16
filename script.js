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

let drops = [];

for (let i = 0; i < 300; i++) {
    drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 3 + 4
    });
}

function drawRain() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    for (let i = 0; i < drops.length; i++) {
        let d = drops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.stroke();

        d.y += d.speed;
        if (d.y > canvas.height) {
            d.y = -30;
            d.x = Math.random() * canvas.width;
        }
    }

    requestAnimationFrame(drawRain);
}

drawRain();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function checkScrollAnimations() {
        const items = document.querySelectorAll('.item1, .item2, .item3');
        
        items.forEach(item => {
            if (isElementInViewport(item)) {
                item.style.opacity = '1'; // Nastavíme viditelnost na 100%
                item.style.transform = 'translateY(0)'; // Vrátíme prvek na původní pozici
            }
        });
    }

    // Spustíme funkci na začátku
    window.addEventListener('scroll', checkScrollAnimations);
    window.addEventListener('load', checkScrollAnimations);
