
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var leftSide
var rightSide

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
  	world = engine.world;
	
	ground = new Ground(200,400,400,20);
	leftSide = new Ground(300,400,10,150);
	rightSide = new Ground(400,400,10,150);

	var ball_options={
		isStatic:false,
		restitution:0.2,
		friction:0,
		density:1.2
	}
	

	//Create the Bodies Here.
	ball=Bodies.circle(50,100,20,{restitution:0.2})
	World.add(world,ball)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
  
  ground.display();
  leftSide.display()
  rightSide.display()
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(ball,ball.position,{x:0.05,y:-0.03})
	
}