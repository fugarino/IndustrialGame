// Selectors
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 3024;
canvas.height = 2076;

c.fillStyle = "rgb(20, 20, 20)";
c.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = "./img/IndustrialGameTilesetMap.png";

console.log(mapImage);

mapImage.onload = () => {
  c.drawImage(mapImage, -550, -100);
};
