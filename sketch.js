const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var abEngine,abWorld;
var ground,ball;

function setup() {
  createCanvas(800,400);
  
  abEngine= Engine.create();//abEngine.world
  abWorld=abEngine.world;
  var goptions= { isStatic:true };
  ground= Bodies.rectangle(400,390,800,30,goptions);
  World.add(abWorld,ground);
  console.log(ground);
  var boptions = { restitution:1 }
  ball = Bodies.circle(400,100,40,boptions);
  World.add(abWorld,ball);




}

function draw() {
  background(255,255,255); 
  Engine.update(abEngine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30);
  fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);

  drawSprites();
}

