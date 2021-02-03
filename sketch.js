
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,log1,log2,log3,paperBall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
	paperBall = new Paper(155,360);
	log1 = new Dustbin(727,630,10,110);
	log2 = new Dustbin(605,630,10,110);
	log3 = new Dustbin(666,685,130,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  text(mouseX + "," + mouseY,10,15);

  ground.display();	
  paperBall.display();
  log1.display();
  log2.display();
  log3.display();

  drawSprites();
 
}



function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall,paperBall.body.position,{x:85,y:-85});
	}
}