window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 400;
  canvas.height = 400;
  ctx.lineWidth = 50; 
  ctx.lineCap ='round'; 
  ctx.strokeStyle = "green";
  ctx.fillStyle = 'orange';

  
  class Fractal {
    
    constructor(canvasWidth, canvasHeight) { 
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.8;
    }
    draw(contextA){
      contextA.fillRect(30, 10, this.canvasWidth, this.canvasHeight);
      //#2) Placed green line above save so when 
      //rotate() is edited only the line moves
      //#3 Remember: changing the x,y in fillRect()
      //moves the rectangle across the canvas
      contextA.save();
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.scale(1, 1); 
      contextA.rotate(7);
      
      contextA.beginPath();
      contextA.moveTo(0,0); 
      contextA.lineTo(this.size, 0);
      contextA.stroke(); 
      contextA.restore();
      /*Spacing, indentation, and order of statements 
      can indeed impact the behavior of your code, so 
      paying attention to these details is essential
      for correct rendering on the canvas.*/
      //#1) The orange rectangle is place on top of everything here


    }
  }
  //Here's an example of the draw method without the need for an argument:
/*
class Fractal {
  // Other code...

  draw() {
    // Use the global context directly
    ctx.scale(0.5, 0.5);
    ctx.translate(this.canvasWidth / 2, this.canvasHeight / 2);
    ctx.rotate(Math.PI);
    ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.size, 0);
    ctx.stroke();
  }
}*/
  const fractal1 = new Fractal(canvas.width, canvas.height);
  
  fractal1.draw(ctx);

  
  class Partical {
    
  }
  
  class Rain {
    
  }
  
  
});