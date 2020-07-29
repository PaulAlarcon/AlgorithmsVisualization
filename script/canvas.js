const canvas = document.querySelector(".myCanvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const paintCanvas = (color) => {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export {
  ctx, paintCanvas, width, height
}