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
      this.sides = 15; //set number of sides in Object
      //for modularity
    }
    draw(contextA){

      contextA.save();
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.scale(1, 1); 
      contextA.rotate(1);
      
      for (let i=0; i<this.sides;i++){
        this.#drawLine(contextA);
        contextA.rotate((Math.PI*2)/this.sides);
        /*(full circle formula)/(number of 
        times loop runs(set by this.sides())) to get branches
        evenly distributed over a circular area*/
      }
      
      contextA.restore();
    }
    #drawLine(contextA){

      contextA.beginPath(); //start drawing
      contextA.moveTo(0,0); //set x,y coords
      contextA.lineTo(this.size, 0); //set ending x,y
      contextA.stroke(); //draw defined line
    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height);
  
  fractal1.draw(ctx);

  
  class Partical {
    
  }
  
  class Rain {
    
  }
  
  
});