
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var paper;
var dustbin1, dustbin2, dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	 //dustbin2 = new Dustbin(300,620,20,100);
	 //dustbin3 = new Dustbin(500,620,20,100);
	 
	dustbin1 = new Dustbin(1200,650);
	paper = new Paper(100,100,20);
	ground = new Ground(width/2,670,width,20);

	//Create a Ground
	
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();

  dustbin1.display();
  //dustbin2.display();
 // dustbin3.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-5});
	}


}

