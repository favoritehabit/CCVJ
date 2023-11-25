//wide range of random shapes
//lesson plan below

window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;
  ctx.lineWidth = 10; 
  ctx.lineCap ='round'; 
  //ctx.strokeStyle = "green"; placed within draw()->contextA.strokeStyle as this.color
  ctx.fillStyle = 'orange';
  ctx.shadowColor = 'black';
  ctx.shadowOffsetY = 10;
  ctx.shadowOffsetx = 5;
  ctx.shadowBlur = 10;

  
  class Fractal {
    constructor(canvasWidth, canvasHeight) { 
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.2;
      this.sides = 6; 
      this.maxLevel=3;
      this.scale=0.5;
      this.angleOfSpread=Math.random()*2.8+0.1;//angle will always be a random value up to 2.9 
      this.branches=2; 
      this.color='hsl('+ Math.random()*360 +', 100%, 50%)';//hue,saturation, lightness. hsl colors are more visible to humans
    }
    
    draw(contextA){
      contextA.strokeStyle = this.color;
      contextA.save();
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.scale(1, 1); 
      contextA.rotate(0);
      
      for (let i=0; i<this.sides;i++){
        this.#drawLine(contextA, 0);
        contextA.rotate((Math.PI*2)/this.sides);
      }
      
      contextA.restore();
    }
    #drawLine(contextA, level){ 
      if (level >this.maxLevel) return;
      contextA.beginPath(); //start drawing
      contextA.moveTo(0,0); //set x,y coords
      contextA.lineTo(this.size, 0); //set ending x,y
      contextA.stroke(); //draw main line
      

      for (let i=0; i<this.branches; i++){
        contextA.save();
        contextA.translate(this.size - (this.size/this.branches)*i,0); 
        contextA.scale(this.scale, this.scale);

        contextA.save();
        contextA.rotate(this.angleOfSpread);
        this.#drawLine(contextA, level+1);
        contextA.restore();
  
        contextA.save();
        contextA.rotate(-this.angleOfSpread);
        this.#drawLine(contextA, level+1);
        contextA.restore();
        contextA.restore();
      }

    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height);
  
  fractal1.draw(ctx);

  
  class Partical {
    
  }
  
  class Rain {
    
  }
  
  
});

/* */