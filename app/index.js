import CanvasCTX from './creativejs/CanvasCTX';

window.ctx = new CanvasCTX('ctx')

ctx.fillStyle = 'red';
ctx.fillEllipse(50, 50, 500, 500);



function draw () {
  window.requestAnimationFrame(draw);
  // Drawing code goes here
  
}
draw();
