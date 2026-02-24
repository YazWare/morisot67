// snow.js
const snowContainer = document.createElement("div");
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

  // 🔥 RGB GLOW ANIMATION
  snow.style.animation = "rgbTextGlow 1.5s linear infinite";

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

setInterval(createSnowflake, 211);

// 🔥 Inject RGB keyframes directly from JS
const style = document.createElement("style");
style.innerHTML = `
@keyframes rgbTextGlow {
  0%   { text-shadow: 0 0 10px red, 0 0 20px red; }
  33%  { text-shadow: 0 0 10px lime, 0 0 20px lime; }
  66%  { text-shadow: 0 0 10px blue, 0 0 20px blue; }
  100% { text-shadow: 0 0 10px red, 0 0 20px red; }
}`;
document.head.appendChild(style);
