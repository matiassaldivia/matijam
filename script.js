// Simple hover animation for logo
document.getElementById('logo').addEventListener('mouseover', function() {
    document.querySelectorAll('.link').forEach(link => {
        link.style.opacity = '1';
    });
});

document.getElementById('logo').addEventListener('mouseout', function() {
    document.querySelectorAll('.link').forEach(link => {
        link.style.opacity = '0';
    });
});
