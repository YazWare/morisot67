const mainPic = document.querySelector(".epstein"); 
const tung = document.getElementById("tung");

mainPic.addEventListener("click", () => {
  tung.play().catch(() => console.log("User interaction needed"));
});
