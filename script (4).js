window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 200;
  canvas.height = 200;
  ctx.lineWidth = 50; 
  ctx.lineCap ='round'; 
  ctx.strokeStyle = "green";
  ctx.fillStyle = 'orange';

  
  class Fractal {
    
    constructor(canvasWidth, canvasHeight) { 
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.4;
    }
    draw(contextA){
      //If you dont want to change scale along with
      //the canvas and its drawings, you can use context.save
      //and context.restore if you want to rotate something
      //and reset it back to where it was before
      contextA.save();//Take snapshot of canvas and its properties
      //and draw the shapes we want to be affected by
      //this translation
      contextA.scale(1, 1); 
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.rotate(3.4);
      contextA.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      contextA.restore();//Reset canvas back to when
      //save() was called
      //Anything drawn after restore() won't be 
      //affected by rotate() or scale()
      //So, now, only the orange rectangle is affected by
      //rotations and not the line
      contextA.beginPath();
      contextA.moveTo(0,0); 
      contextA.lineTo(this.size, 0);
      contextA.stroke(); 
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