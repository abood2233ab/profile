const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = '01100101 ABDULRAHMAN ALZOMOR ⚠☢☣✞✈︎';
const fontSize = 16;
let columns = canvas.width / fontSize;
let drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

setInterval(draw, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    drops = Array(Math.floor(columns)).fill(1);
});

// تفعيل الاهتزاز والرسالة المرعبة بعد 4 ثواني
setTimeout(() => {
    document.getElementById('scaryMessage').classList.add('show');
    document.body.style.animation = 'shake 0.5s infinite';
}, 4000);
