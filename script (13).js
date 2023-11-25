//wide range of random shapes
//lesson plan below

window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 300;
  ctx.lineWidth = 10; 
  ctx.lineCap ='round'; 
  ctx.fillStyle = 'orange';
  ctx.shadowColor = 'black';
  ctx.shadowOffsetX = 5;
  ctx.shadowOffsetY = 10;
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

  
  class Partical {//the new keyword below is linked to this Particle class
    constructor(canvasWidth, canvasHeight){/*Each object created by this class will also have to be aware of
                                            available canvas width and height because I want these objects to reset when they fall off screen.*/
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.x = Math.random() * this.canvasWidth;
      this.y = Math.random() * this.canvasHeight;
      /*^ Initial starting x-position horizontal coordinate will be a random number between 0 and canvas width. Vertical y-coordinate will be a random value between 0 and canvas height. */
      this.width=50;
      this.height=50;
      /*Width of each particle will be, for example, 50 pixels and height will be 50 pixels as well. */
      
    }
    update(){/*Each particle object created by this class will have access to update method. Inside update method we will define behavior and movement.*/
      this.x++;
      this.y++;
      /*^Update method will be called over and over 60 times per second and each time it runs, we will push it one pixel on horizontal x-axis to the right, and one pixel on the vertical y-axis so downwards, these two actions combined will result in bottom-right movement*/
      
    }
    draw(contextA){/*Each particle will also have its associated draw method where we define some code that will draw this particle 60 times per second. After each position update. Draw method, will need one argument to specify which canvas we want to draw on.This effect will use two canvas elements.*/
      contextA.fillRect(this.x, this.y, this.width, this.height);/*Let's start simple by calling built-in fill rectangle method. This method takes x, y, width, and height, and it will draw a rectangle at that position of that size. Perfect, so we have a blueprint that can be used to create 20 particle objects*/
    }
  }
  
  class Rain {//Here we have our custom particle class to draw individual particle and define its behavior and movement. And we will have this rain class that will handle the entire effect, all the particles at once.
    constructor(canvasWidth, canvasHeight){//This class will need a constructor. It will expect arguments for width and height of canvas, mainly because one of these classes responsibilities will be to spread our fractal particles over the available canvas area. I convert these arguments into class properties as usual
      this.canvasWidth = canvasWidth;//canvas width property on this rain object we are creating right now is equal to canvas width variable that was passed as an argument to the class constructor.
      this.canvasHeight = canvasHeight;//Canvas height property on this instance of rain class is equal to canvas height variable that was passed as an argument. 
      this.numberOfParticles = 20;//will determine maximum number of active particles on screen.
      this.particles = [];//will be an array and it will hold all currently active particle objects created using our Particle class.
      this.#initialize();/*It creates one new blank object and assigns it values and properties it contains to create one instance of that class. While doing that, it also runs all the code it contains. So we can take advantage of that and we can run our initialize method from inside of the constructor.
                           I do it by calling this dot #initialize like this. Structuring our code like this will cause the code inside initialize method to be automatically executed when the constructor is triggered.*/
                           
    }
    #initialize(){ //The job of this private method will be to fill particles array from line 79 with 20 particle objects. 
      for (let i=0; i<this.numberOfParticles; i++){/*starts at 0, as long as i is less than number of particles from line 78, i++. Every time this for-loop runs, in our case, it will run 20 times. It will take this.particlesArray from line 70, and it will use built-in array push method. In JavaScript array push method adds one or more elements we pass to it, to the end of the array it is called on.*/
        this.particles.push(new Particle);/*In JavaScript array push method adds one or more elements we pass to it, to the end of the array it is called on.*/
        /*I pass it new Particle so one instance of our custom Particle class from line 70, the new keyword will look for a class called Particle, and it will create one new blank JavaScript object. It will then run code inside constructor of this Particle class to assign it values and properties based on the blueprint inside.*/
        
      }
    }
    run(){/*Rain class will also need a public method that will run 60 times per second. It will cycle over all currently active particle objects from line 93 and it will call their associated update method from line 79 and draw
            method from line 83 on each of these 20 particles one-by-one. And it will do it 60 times per second.*/
            this.particles.forEach(particle => {/*all our active particles will be constantly updating and redrawing at new positions, creating an illusion of movement. I do that by taking this dot particles array from line 93, which will contain 20 particle objects, thanks to the initialize method we just wrote and I call built-in for each array method on it. For each method executes a provided function once for each array element, so I assign each element a temporary variable name.*/
            
              particle.draw(contextA);/*Just for the inner purposes of this for loop, I call each one, for example, particle, and provided function that will be executed for each one of the 20 elements will just take that particle and call its draw method from line 83. I can see that method expects argument for context to specify which canvas to draw on. Run method is public so it will take that context argument from the outside. I will show you in a minute when I call it, and it will pass that context along to draw method on each particle.*/
              particle.update();
            })
    }
  }
  
  const rainEffect = new Rain(canvas.width, canvas.height);/*I create a custom variable I call for example rain effect, and I make it an instance of Rain class from line 88 using the new keyword. As we said, the new keyword will look for class with this name and it will run its constructor. On line 89. I can see that rain class expects canvas width and canvas height as arguments. So I pass it canvas width from line four and canvas height from line five*/
  console.log(rainEffect);
     /*Since this is a public method, I can call it from the outside from the instance of this class. So rain effect dot run. I actually want this method to run over and over 60 times per second, updating and drawing
all 20 particles inside particles array. To do that, I will need to put it inside animation loop. I create a custom function. I call, for example, animate. Inside. I call rain effect from line 188 dot run the method we defined on line 101. */
function animate(){
  rainEffect.run(ctx);
  requestAnimationFrame(animate); /*Then I call request animation frame method. This built-in method tells the browser that we want to perform an animation and it will request that the browser to call a specific function to update the animation between the next repaint,
that function to be invoked before repaint is passed as an argument. And I will pass it animate the name of its parent function. So I will create an infinite loop. Animate will start, it will call run method from line 101 and then request animation frame we'll call animate again. This will repeat endlessly. When we call request animation frame like this, it will usually try to adjust itself to screen refresh rate. So in most cases it will run at 60 frames per second for smooth animatio.*/
}
animate();
  
});

/* */