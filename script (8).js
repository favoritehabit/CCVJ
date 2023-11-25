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
      
//  deleted    contextA.translate(50,50);
      for (let i=0; i<20;i++){
        this.#drawLine(contextA);
        contextA.rotate(0.5);//Rotate more. specifically
        //by +0.5 for every new line
        /*Code repetition was occuring, so 
        a loop was implemented to increase by 
        1 up to 5. Notice how drawLine() can
        be called from above as long as called
        from within main class.*/
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