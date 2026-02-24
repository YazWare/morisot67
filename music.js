
const music = document.getElementById("bgmusic");
const btn = document.getElementById("musicBtn");

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸";
  } else {
    music.pause();
    btn.textContent = "▶";
  }
});
