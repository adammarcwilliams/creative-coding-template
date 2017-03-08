let w, width, h, height;
let canvas;

class CTX {

  constructor (canvasName) {
    canvas = document.createElement('canvas');
    const body = document.querySelector('body');
    canvas.setAttribute('id', canvasName);
    canvas.style.position = 'absolute';
    canvas.style.left = '0px';
    canvas.style.top = '0px';
    body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    console.log(ctx.prototype);
    this.resize();
    window.addEventListener('resize', this.resize, false);
    this.prototype = Object.assign({}, this, ctx);
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
}

export default CTX;
