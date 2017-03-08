// import CTX from './creativejs/canvas';

class WL_CanvasRenderingContext2D {
    constructor(){
        this.ctx = document.createElement('canvas').getContext('2d');
    }

    resize () {

    }
}


(() => {
    var context = document.createElement('canvas').getContext('2d');
    for (let i of Reflect.ownKeys(Object.getPrototypeOf(context))){
        if (['symbol', 'constructor'].indexOf(typeof i) < 0){
            var propertyDesc = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(context), i);
            if (typeof context[i] != 'function'){
                [propertyDesc.get, propertyDesc.set] = [function(){return this.ctx[i]}, function(val){this.ctx[i] = val;}];
            }
            else{
                propertyDesc.value = function(...args) {this.ctx[i].apply(this.ctx, args)};
            }
            Object.defineProperty(WL_CanvasRenderingContext2D.prototype, i, propertyDesc);
        }
    }
})();

window.a = new WL_CanvasRenderingContext2D;

//
//
//
// function draw () {
//   window.requestAnimationFrame(draw);
//   // Drawing code goes here
// }
// draw();
