const overlay = document.getElementById("overlay");
const mainContainer = document.querySelector("container");
const bgmusic = document.getElementById("bgmusic");
// --- CLICK OVERLAY ---
overlay.addEventListener("click", () => {
    overlay.classList.add("fade-out");
    bgmusic.style.display = "block";
    bgmusic.play();
    bgmusic.muted = false;

    // Start text animation
    animateText();

    // Affiche main container après animation overlay
    setTimeout(() => {
        mainContainer.style.display = "block";
    }, 500);

    // Cache overlay après fade
    setTimeout(() => {
        overlay.style.display = "none";
    }, 800);
});
