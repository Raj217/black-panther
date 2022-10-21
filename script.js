document.onmousemove = handleMouseMove;
window.addEventListener("wheel", handleScroll);
root = document.querySelector(":root");
timer = document.getElementById("timer");
text = document.getElementById("text");
size = 100;
countdown = 5;
currentText = 0;

function handleMouseMove(event) {
  event = event || window.event;
  if (currentText == 3) root.style.setProperty("--size", `${size}px`);
  root.style.setProperty("--x", `calc(${event.clientX}px )`);
  root.style.setProperty("--y", `calc(${event.clientY}px )`);
}

function handleScroll(event) {
  if (currentText == 3) {
    adder = event.wheelDeltaY >= 0 ? 20 : -20;
    size += adder;
    size = size < 0 ? -size : size;
    root.style.setProperty("--size", `${size}px`);
  }
}

setInterval(function () {
  if (countdown > 0) {
    timer.innerText = `${countdown}`;
    countdown--;
  } else {
    timer.innerText = "";
  }
}, 1000);

function textAnim() {
  if (currentText == 0) {
    text.classList.add("text-active");
    currentText++;
  } else if (currentText == 1) {
    text.setAttribute("data-text", " Maybe try hovering and scrolling? ");
    text.innerText = " Maybe try hovering and scrolling? ";
    currentText++;
  } else if (currentText == 2) {
    text.classList.remove("text-active");
    currentText++;
  }
  console.log(currentText);
}
setTimeout(textAnim, 6000);
setTimeout(textAnim, 12000);
setTimeout(textAnim, 18500);
