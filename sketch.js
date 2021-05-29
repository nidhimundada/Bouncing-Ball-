// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var groundOptions;
var ballOptions;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  groundOptions = {
    isStatic: true
  }

  ballOptions = {
    restitution: 1
  }

  ground = Bodies.rectangle(200,400,400,30,groundOptions);
  World.add(world,ground);

  ball = Bodies.circle(200,200,10,ballOptions);
  World.add(world, ball);

  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10, 10);

}