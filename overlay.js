const overlay = document.getElementById("overlay");
const mainContainer = document.querySelector(".container");
const bgmusic = document.getElementById("bgmusic");

// Initially hide main container
mainContainer.style.display = "none";

// --- CLICK OVERLAY ---
overlay.addEventListener("click", () => {
    overlay.classList.add("fade-out");

    // Start music (unmuted)
    bgmusic.muted = false;
    bgmusic.play().catch(() => console.log("User interaction required to play audio"));

    // Start text animation if you have one
    animateText?.();

    // Show main container after overlay fade
    setTimeout(() => {
        mainContainer.style.display = "block";
    }, 500);
});

// Remove overlay from DOM after fade
overlay.addEventListener('transitionend', () => {
    overlay.remove();
}, { once: true });
