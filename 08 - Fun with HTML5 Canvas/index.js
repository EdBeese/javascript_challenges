// JavaScript
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// Sets the canvas height and width to the entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// This line is setting a starting colour
ctx.strokeStyle = '#BADA55';

// These lines are defining that the lines where they end and where they meet
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// Setting width of 'brush'
ctx.lineWidth = 1;

// Setting a starting value for whether the cursor is drawing which will be reset by keyUp/keyDown
let isDrawing = false;

// You need a starting point and an ending point for the line
let lastX = 0;
let lastY = 0;

// This is to alter the color using HSL
let hue = 0;

let direction = true;

// The function to implement the drawing.
function draw(e) {
  if (!isDrawing) return; // this will stop the function from running if the mouse is not pressed.
  // console.log(e);
  // Here we change the strokeStyle (color) to be the current hue value
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // this is the starting point
  ctx.moveTo(lastX, lastY);
  // the end point - offsetX and offsetY are coming from the event listener
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // This sets the value of the lastX and lastY to the leaving off point
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // This is increasing the hue by one
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  // Here we are increasing the size of the lineWidth until it gets to 100, then it decreases in size
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

// The event listener to execute the function
canvas.addEventListener('mousemove', draw);

// The event listeners for mousedown and up, which sets the value of isDrawing
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  // This sets the lastX/Y as the point at which the mouse went down
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
