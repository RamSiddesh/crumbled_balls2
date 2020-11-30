
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper , rect1 , ground , paperImg , dustbinImg ;
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  paper = new paperClass(200,200,30,30);
	rect1 = new Rectangle(600,630,100,150);
  ground = new Ground(400,690,800,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background("white");
  paper.display();
  rect1.display();
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:32,y:-32});
	 }
   }


