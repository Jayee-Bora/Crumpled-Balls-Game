
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
dustbin= loadImage("dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1= new Dustbin(550,500,20,150);
	box2= new Dustbin(650,500,20,150);
	ball1= new Ball(200,500,20);
	ground1= new Ground(400,600,800,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  ball1.display();
  ground1.display();
  imageMode(CENTER);
  image(dustbin,600,500,150,200);

}
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 50, y: -50})
	}
}


