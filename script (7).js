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

      contextA.save();
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.scale(1, 1); 
      contextA.rotate(1);
      this.#drawLine(contextA);//after creating drawline()
      //below, we can call it from draw() above
      //For the next step, we can copy the rotate()
      //and this.#drawLine() to create multiple
      //lines
      //we can also do the same with context.translate()
      //so the canvas rotates with each new line
      contextA.rotate(1);
      this.#drawLine(contextA);
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.rotate(1);
      this.#drawLine(contextA);
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.rotate(1);
      this.#drawLine(contextA);
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.rotate(1);
      this.#drawLine(contextA);
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.rotate(1);
      this.#drawLine(contextA); 
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.restore();
    }
    #drawLine(contextA){
      //new private methods are only accessible
      //from their parent classes. Here, we will
      //add some internal functionality(abstraction)
      //this private drawing method for this 
      //class handles drawing of a single line or 
      //branch of a fractal. The draw() method 
      //encapsulating drawline() draws the complete
      //fractal shape. drawLine() will expect 
      //contextA as an argument to specify which
      //element we want to draw on. We transfer all
      //the code from above that draws the line.
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