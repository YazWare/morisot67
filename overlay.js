const overlay = document.getElementById("overlay");
const mainContainer = document.querySelector(".container");
const bgmusic = document.getElementById("bgmusic");

// --- CLICK OVERLAY ---
overlay.addEventListener("click", () => {
    // Start fade-out
    overlay.classList.add("fade-out");

    // Play music
    bgmusic.style.display = "block";
    bgmusic.muted = false;
    bgmusic.play().catch(() => console.log("User interaction required to play audio"));

    // Start text animation
    animateText?.();

    // Show main container after a short delay
    setTimeout(() => {
        mainContainer.style.display = "block";
    }, 500);

    // Hide overlay after fade
    setTimeout(() => {
        overlay.style.display = "none";
    }, 800);
});

// Remove overlay from DOM after transition ends
overlay.addEventListener('transitionend', () => {
    overlay.remove();
}, { once: true });
