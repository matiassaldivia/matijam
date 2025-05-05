const canvas = document.getElementById('cables');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawCable(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    const cp1x = x1 + (x2 - x1) / 2;
    const cp1y = y1 - 100;
    ctx.quadraticCurveTo(cp1x, cp1y, x2, y2);
    ctx.stroke();
}

function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const logo = document.getElementById('logo');
    const icons = document.querySelectorAll('.icon');

    const logoRect = logo.getBoundingClientRect();
    const cx = logoRect.left + logoRect.width / 2;
    const cy = logoRect.top + logoRect.height / 2;

    icons.forEach((icon, index) => {
        const rect = icon.getBoundingClientRect();
        const ix = rect.left + rect.width / 2;
        const iy = rect.top + rect.height / 2;
        const colors = ['#ff0000', '#00ff00', '#ffff00'];
        drawCable(cx, cy, ix, iy, colors[index % colors.length]);
    });
}

setInterval(drawLines, 1000 / 60);
