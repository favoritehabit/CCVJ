
//Procedural; linear execution
//load event is fired when all HTML page elements, along with required files, have loaded and become the complete page
window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');/*load canvas onLoad*/
  const ctx = canvas.getContext('2d');//var 'ctx' contains instance of 2d canvas api
  //*We can call for either '2d' or 'WebGL'. 2d is the 2d canvas api.*/
  //To access canvas' built-in draw() methods,
  //call from 'ctx'
  //*To draw on canvas, use ctx. and use any of the methods.
  //ctx object holds a reference to all canvas properties and methods
  //Their settings won't change unless instructed to.
  canvas.width = 200;
  canvas.height = 200;
  ctx.lineWidth = 50; //line thickness
  ctx.lineCap ='round'; //line edges
  ctx.strokeStyle = "green";
  ctx.fillStyle = 'orange';

  
  
  class Fractal {
    //Constructors requires 2 arguments to be passed
    constructor(canvasWidth, canvasHeight) { // Initializes objects in a class when called via the 'new' keyword for a new, attribute-inheriting object
      //Get access to these properties so the current boundaries are known.
      //Convert arguments into class properties with 'this', so they become part of the blueprint
      this.canvasWidth = canvasWidth;
      this.canvasHeight = canvasHeight;
      this.size = this.canvasWidth * 0.4;
    }
    draw(context){
      //The 'context' argument will be passed to this function later when called,
      //and will specify which canvas element we want to draw on.
      //A function that sits on an object is called a method
      //Take some values from the constructor,and draw a fractal shape based on these values
      context.scale(0.5, 0.5); //Takes 2 arguments
      //called scaling factors, as x,y coords, 1= same size, 
      //scales sizes up +-1 their orginal. 
      //Scaled down to half their size. Note that the
      //scaling centerpoint changes in scale as well.
      context.translate(this.canvasWidth/2,this.canvasHeight/2);//How far to move (-)x,(-)y
      //canvas division here sets the position to 
      //halfway down the canvas or center
      //^Also overwrote fillRects position of 0,0 
      context.rotate(Math.pi);//Takes one argument -> angle 
      //in radians not degrees. Will rotate around
      //origin point (here 0,0)
      context.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      //^x,y,width,height
      //^the pink is the css acting on the canvas
      //we only show 50px of the css canvas with x=50
      context.beginPath();//Begin drawing a new shape. WIll also close
      //previous shapes, if any.
      context.moveTo(0,0); // Start xy coords for the line
      //Find canvas grid reference
      context.lineTo(this.size, 0);// End xy coords 
      //(canvas.width, canvas.height set from lines 11,12)
      context.stroke(); //built-in method that actually draws line
    }
  }
  //Call the appropriate class to use the constructor, and
  //the constructor will use the object as a blueprint.
  const fractal1 = new Fractal(canvas.width, canvas.height);
  //'new' will look for called class to trigger constructor()
  // Main Fractal class expects 'canvas.width, 
  //canvas.height' as arguments
  //With access to Fractal's draw method
  //thanks to 'fractal1'
  fractal1.draw(ctx);//fractal1, previously created to access 
  //the main Fractal class, is called here & also has access
  //to main Fractals public draw method.
  //draw expects an argument to specify which canvas
  //element to draw on, and we only have 1 
  //canvas element so far, held in ctx.

  
  class Partical {
    
  }
  
  class Rain {
    
  }
  
  
});