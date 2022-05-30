// Selectors
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

// canvas.width = 3024;
// canvas.height = 2076;
canvas.width = 3600;
canvas.height = 2160;

c.fillStyle = "rgb(20, 20, 20)";
c.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = "./img/IndustrialGameTilesetMap.png";

const playerImage = new Image();
playerImage.src = "./img/IdleRight.png";

mapImage.onload = () => {
  // c.drawImage(mapImage, -550, -100);
  c.drawImage(mapImage, 60, 0);
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 8,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 4 / 2,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 8,
    playerImage.height
  );
};
