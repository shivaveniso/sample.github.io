document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animationBox');
    box.style.opacity = 0; // Reset opacity
    box.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        box.style.opacity = 1; // Animate opacity
    }, 10); // Small timeout to trigger the animation
});
