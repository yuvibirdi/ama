// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// Create a new canvas element
var canvas = document.createElement('canvas');
canvas.id = 'myCanvas';
document.querySelector('.chart-area').appendChild(canvas);

// Get the canvas and its context
var ctx = canvas.getContext('2d');

// Create a new image element
var img = new Image();
img.src = '~/Screenshots/2023-06-25_10-02.png';

// When the image loads, draw it on the canvas
img.onload = function() {
  // Set the canvas dimensions to match the image
  canvas.width = img.width;
  canvas.height = img.height;

  // Draw the image on the canvas
  ctx.drawImage(img, 0, 0);
