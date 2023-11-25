
//Simple geometric patterns: Snowflake Fractal
//lesson plan below

window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;
  ctx.lineWidth = 20; 
  ctx.lineCap ='round'; 
  ctx.strokeStyle = "green";
  ctx.fillStyle = 'orange';

  
  class Fractal {
    //we add new, global properties via 'this'
    constructor(canvasWidth, canvasHeight) { 
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.2;
      this.sides = 1; 
      this.maxLevel=3;
      this.scale=0.6;
      this.angleOfSpread=1;//how spread out the final shape is. placed in contextA.rotate() //changing the values changes the relationship between child and parent branch
      this.branches=2; //make # of branches a class property
    }
    
    draw(contextA){
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
      /*Both of these branches will be the same scale, so I move, translate and scale outside this save call here.
      //->contextA.save() and restore(); moved to inside of forloop for The reason the branches are not spread out along the main branch but are pushed kind of outside is because I'm calling this save and
restore only ones outside of the for-loop. I actually want to save and restore each time we draw a pair of branches so that this translate online 44 can correctly climb along the parent branch. I move save and restore inside the for-loop. And now it's doing what I intended

      /*I wrap this entire block in another pair of save and restore to make sure our translates, scales and rotates don't overflow outside this loop of drawLine. I hope you don't find it confusing that we have multiple save and restore calls here. Think of the save and restore in pairs. They are kind of nested in each other. So each restore knows which one is its associated save point. So it knows what state of canvas to restore back to.*/
      for (let i=0; i<this.branches; i++){
        //contextA.save(); this restore() is outside of this forloop
        contextA.save();//re-placed again
        contextA.translate(this.size - (this.size/this.branches)*i,0); 
        /*^If I want to move it to the other side of the main branch,
        I set this value to this dot size minus like this.*/
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
      //contextA.restore(); moving to within forloop

      /*This code moved into the forloop:
      contextA.save();
      contextA.translate(this.size,0); //moved from within save()
      contextA.scale(this.scale, this.scale);//moved from within save()

      contextA.save();
      contextA.rotate(this.angleOfSpread);
      this.#drawLine(contextA, level+1);
      contextA.restore();

      contextA.save();
      contextA.rotate(-this.angleOfSpread);
      this.#drawLine(contextA, level+1);
      contextA.restore();
      */


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