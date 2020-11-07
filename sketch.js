//namespacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ground;
var box1, box2;

function setup() {
  createCanvas(400,400); 
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(150,100,50,70);
  box2 = new Box(200,200,80,80);
  ground = new Ground(200, 390, 400, 20);
}

function draw() {
  background(0);
  Engine.update(engine); 
  
  box1.display();
  box2.display();
  ground.display();
}