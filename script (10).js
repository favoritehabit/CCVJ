//lesson plan below

window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 500;
  canvas.height = 500;
  ctx.lineWidth = 50; 
  ctx.lineCap ='round'; 
  ctx.strokeStyle = "green";
  ctx.fillStyle = 'orange';

  
  class Fractal {
    
    constructor(canvasWidth, canvasHeight) { 
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.8;
      this.sides = 5; 
      this.maxLevel=90;//create maxLevel for 'level'
    }
    
    draw(contextA){
      contextA.save();
      contextA.translate(this.canvasWidth/2,this.canvasHeight/2);
      contextA.scale(1, 1); 
      contextA.rotate(1);
      
      for (let i=0; i<this.sides;i++){
        this.#drawLine(contextA, 0);
        contextA.rotate((Math.PI*2)/this.sides);
      }
      
      contextA.restore();
    }
    #drawLine(contextA, level){ //created second argument level
      /*A Fractal will be made by recursion, a 
      process in wbich a function call itself
      directly.*/
      /*We need to create a condition that will 
      end recursion at some point that will prevent
      a drawLine from colon itself and if further, 
      when a certain limit is reached, I do it by 
      passing it a second argument called level. I
      create an if statement and I check if this 
      level variable that will be passed as an argument
      is more than this dot max level. If so, 
      use return statement like this. 
      When a return statement is used in a 
      function body, the execution of the 
      function is stopped.*/
      if (level >this.maxLevel) return;/*
      
The maxLevel property in the Fractal class is used to control the depth of recursion when drawing the fractal. It determines the number of times the #drawLine method will call itself, creating additional lines at each level of recursion. In the provided code, maxLevel is set to 2, meaning the fractal will have two levels of recursion.

Here's how it works:

The #drawLine method is called initially from the draw method with level set to 0.
Inside #drawLine, there's a check: if (level > this.maxLevel) return;. If the current level exceeds the maxLevel, the recursion stops, and no more lines are drawn.
If the current level is within the specified limit (maxLevel), a line is drawn, and the method calls itself again with an increased level: this.#drawLine(contextA, level + 1);.
The process repeats, creating a branching effect as each level of recursion introduces additional lines.
In practical terms, adjusting the maxLevel property allows you to control the complexity and intricacy of the fractal. Higher values for maxLevel result in a more detailed and complex fractal, while lower values produce simpler shapes. You can experiment with different values for maxLevel to see how it influences the appearance of the fractal.
      */
      contextA.beginPath(); //start drawing
      contextA.moveTo(0,0); //set x,y coords
      contextA.lineTo(this.size, 0); //set ending x,y
      contextA.stroke(); //draw defined line
      contextA.save();
      //Start by isolating any changes 
      //I make to canvas state
      /*If I want to create a branch shape, I 
      also want to move the point from which 
      the new line grows from its parent line. 
      I will do it by translating canvas state. 
      As we explained earlier, this will push 
      coordinates 0 0 by that value, and it will 
      also move rotation and scale in center point 
      with it as a side effect, for example, 
      look at what happens if between each line 
      I translate by 50 pixels horizontally and 
      0 vertically, I can push the new line
      along its parent line using translate(). */
      contextA.translate(this.size,0);
      /*If I want to create a branch shape, I also 
      want to move the point from which the new 
      line grows from its parent line. I will do 
      it by translating canvas state. As we 
      explained earlier, this will push coordinates 
      0 0 by that value, and it will also move 
      rotation and scale in center point with it as 
      a side effect, for example, look at what 
      happens if between each line I translate by 
      50 pixels horizontally and 0 vertically, I 
      can push the new line along its parent line 
      using translate. What if I want the new line 
      to grow from the end of its parent line, I 
      can do that by translating horizontally by 
      the entire length of that line. So here I 
      used this.size property from line 17. I 
      created kind of a hook shape. I can scale 
      it down a bit. I can change the size of 
      individual segments here on line 17. Now if 
      I increase max level, I allow drawLine to 
      call itself more times increasing in the 
      amount of lines that make up our final fractal shape.*/
      contextA.scale(0.7, 0.7); /*scale the line down 
      90% each time*/
      contextA.rotate(2);
      /*Let's say I want drawLine to call itself 
      two times. Our fractal will have a depth of 
      two levels. When drawLine calls itself, I 
      can see up here that it expects two arguments, 
      contexts and level it every time drawLine 
      calls itself, I increase that level argument 
      by plus one. */
      this.#drawLine(contextA, level+1);
      contextA.restore();
    }
  }

  const fractal1 = new Fractal(canvas.width, canvas.height);
  
  fractal1.draw(ctx);

  
  class Partical {
    
  }
  
  class Rain {
    
  }
  
  
});

/*inspired by H-tree fractal, 
where you have three lines that make 
the base h letter shape that branches into 
four smaller h letter shapes at each ending 
and at each ending of these smaller ones, 
there are even smaller. In mathematical 
fractal, we can keep zooming closer and 
closer and see more detail as this pattern 
repeats itself on infinitely smaller and smaller 
scales. For our effect, we will define some 
depth. Let's say we want each line to be 
split into smaller lines five times, and 
then our fractal shape is complete. */