const snowContainer = document.createElement("div");
const sammy = document.getElementById('sammy');

snowContainer.style.position = "fixed";
snowContainer.style.top = "0";
snowContainer.style.left = "0";
snowContainer.style.width = "100%";
snowContainer.style.height = "100%";
snowContainer.style.pointerEvents = "none";
snowContainer.style.zIndex = "9999";
document.body.appendChild(snowContainer);

function createSnowflake() {
  const snow = document.createElement("div");
  snow.textContent = "67";
  snow.style.position = "absolute";
  snow.style.top = "-2em";
  snow.style.left = Math.random() * window.innerWidth + "px";
  snow.style.fontSize = Math.random() * 24 + 12 + "px";
  snow.style.opacity = Math.random();
  snow.style.color = "white";          // ✅ White color
  snow.style.textShadow = "0 0 2px white"; // optional subtle glow

  snow.style.pointerEvents = "auto";
  
snow.addEventListener('click', () => {
 sammy.play();
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

setInterval(createSnowflake, 500);

