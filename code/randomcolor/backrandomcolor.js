const backcolor = document.getElementById("backcolor");

backcolor.addEventListener("click", () => {
  const color = ["red", "green", "blue", "yellow"];

  const random = Math.floor(Math.random() * color.length);

  document.body.style.backgroundColor = color[random];
});
