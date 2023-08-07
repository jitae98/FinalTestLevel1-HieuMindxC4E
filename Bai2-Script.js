function randomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function setColor(color) {
  document.body.style.background = color;
  document.getElementById("colorCode").value = color;
}

function setGradient(color1, color2) {
  document.body.style.background = `linear-gradient(${color1}, ${color2})`;
}

document
  .getElementById("randomColorBtn")
  .addEventListener("click", function () {
    const color = randomHexColor();
    setColor(color);
  });

document.getElementById("copyColorBtn").addEventListener("click", function () {
  const colorCode = document.getElementById("colorCode");
  colorCode.select();
  document.execCommand("copy");
});

document.getElementById("colorPicker").addEventListener("change", function () {
  setColor(this.value);
});

document.getElementById("applyGradient").addEventListener("click", function () {
  const color1 = document.getElementById("colorPicker1").value;
  const color2 = document.getElementById("colorPicker2").value;
  setGradient(color1, color2);
  document.getElementById("colorCode").value = `gradient(${color1}, ${color2})`;
});
