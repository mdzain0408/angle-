const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

logs= new spinlog(PI/2)

  createSprite(400, 200, 50, 50);
}

function draw() {

Engine.update(engine)


  background(255,255,255);  
  drawSprites();
}