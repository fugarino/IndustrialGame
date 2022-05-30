// Selectors
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
console.log(c);

c.fillStyle = "lightBlue";
c.fillRect(0, 0, canvas.width, canvas.height);
