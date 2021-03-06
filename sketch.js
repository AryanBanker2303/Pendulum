
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var bobColorR,bobColorG,bobColorB;

function setup() {
  createCanvas(400,600);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {
  restitution : 1.0,
  density : 1.0
}

ball = Bodies.circle(220,200,20,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : holder,
  stiffness: 0.001,
  length : 120
}
var string = Constraint.create(options);
World.add(world,string);

fill("blue");
}


function draw() {
  background("yellow"); 
  Engine.update(engine);


  fill (random(0,255),random(0,255),random(0,255));
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);

if(frameCount % 10 === 0){
bobColorR = random(0,255);
bobColorG = random(0,255);
bobColorB = random(0,255);
}
fill(bobColorR,bobColorG,bobColorB);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("red");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)

//////////////////////////////////////////////////////////////////////////
if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;
ball.position.y = 300;
}

}








