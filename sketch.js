const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, crumpled;
var bar,lbar,rbar,dustbin;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(200,500);
	ground = new Ground(400,690,800,20);
	bar = new Bars(700,670,140,20);
	lbar=new Bars(625,600,20,160);
	rbar=new Bars(775,600,20,160);

	Engine.run(engine);
  
}


function draw() {
  
  background("blue");
  paper.display();  
  ground.display();
  bar.display();
  lbar.display();
  rbar.display();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-75});

	}

}

