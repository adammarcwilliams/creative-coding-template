import CanvasCTX from './creativejs/CanvasCTX';

window.layer = new CanvasCTX('layer');



function draw () {
  window.requestAnimationFrame(draw);
  // Drawing code goes here
}
draw();
