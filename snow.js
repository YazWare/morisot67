// Your audio element
const sammy = document.getElementById('sammy'); // <audio id="sammy" src="snow-sound.mp3"></audio>

function createSnowflake() {
  const snow = document.createElement("div");
  snow.textContent = "67";
  snow.style.position = "absolute";
  snow.style.top = "-2em";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.fontSize = Math.random() * 24 + 12 + "px";
  snow.style.opacity = Math.random();
  snow.style.color = "white";
  snow.style.textShadow = "0 0 2px white";

  // **Make snowflake clickable**
  snow.style.pointerEvents = "auto"; // IMPORTANT: your container has pointerEvents: none
  snow.addEventListener('click', () => {
    sammy.currentTime = 0; // rewind if needed
    sammy.play();
    snow.remove(); // optional: remove on click
  });

  snowContainer.appendChild(snow);

  let y = -30;
  const speed = Math.random() * 2 + 1;

  function fall() {
    y += speed;
    snow.style.top = y + "px";
    snow.style.transform = `rotate(${y * 2}deg)`;

    if (y < window.innerHeight) {
      requestAnimationFrame(fall);
    } else {
      snow.remove();
    }
  }

  fall();
}
