let w, width, h, height;
let canvas;

class CanvasCTX {

  constructor (canvasName) {
    canvas = document.createElement('canvas');
    const body = document.querySelector('body');
    canvas.setAttribute('id', canvasName);
    canvas.style.position = 'absolute';
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    body.appendChild(canvas);
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', this.resize, false);
  }

  resize () {
    let c = [].slice.call(document.getElementsByTagName('canvas'));
    width = w = window.innerWidth;
    height = h = window.innerHeight;
    c.map((x) => {
      x.width = width;
      x.height = height;
    });
    console.log('resize: ' + w + ':' + h);
  }

  myEllipse (x, y, width, height) {
    if (height == undefined) { height = width; }
    this.beginPath();
    for(var i=0; i<Math.PI*2; i+=Math.PI/16) {
    this.lineTo(x+(Math.cos(i)*width/2), y+(Math.sin(i)*height/2));
    }
    this.closePath();
    this.stroke();
  };

   fillEllipse (x, y, width, height) {
    if (height == undefined) height = width;
    this.myEllipse(x,y,width, height);
    this.fill();
    this.beginPath();
  };
}

export default CanvasCTX;


// Adds all the methods of CanvasRenderingContext2D to our CanvasCTX object.
(() => {
    var context = document.createElement('canvas').getContext('2d');
    for (let i of Object.keys(Object.getPrototypeOf(context))){
        if (['symbol', 'constructor'].indexOf(typeof i) < 0){
            var propertyDesc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(context), i);
            if (typeof context[i] != 'function'){
                [propertyDesc.get, propertyDesc.set] = [function(){return this.ctx[i]}, function(val){this.ctx[i] = val;}];
            }
            else{
                propertyDesc.value = function(...args) {this.ctx[i].apply(this.ctx, args)};
            }
            Object.defineProperty(CanvasCTX.prototype, i, propertyDesc);
        }
    }
})();
