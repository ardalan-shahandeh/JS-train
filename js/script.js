const container = document.querySelector("#container");

window.onmousemove = function (e) {
  let x = e.clientX;
  let y = e.clientY;

  container.style.backgroundPositionX = x / 5 + "px";
  container.style.backgroundPositionY = y / 5 + "px";
};
