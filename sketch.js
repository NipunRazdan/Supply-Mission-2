var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var redbox1
var redbox2
var redbox3
var r1,r2,r3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	//redbox1=createSprite(width/2,height-50,100,20)
	//redbox1.shapeColor="red";
	
//	redbox2=createSprite(350,620,20,100)
//	redbox2.shapeColor="red";

	//redbox3=createSprite(460,620,20,100)
	//redbox3.shapeColor="red";
	 
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	r1=new Box(width/2,height-60,100,20);
	r2=new Box(350,600,20,100);
	r3=new Box(460,600,20,100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  r1.display();
  r2.display();
  r3.display();

  
   //packageSprite.collide(redbox1);
   //packageSprite.collide(redbox2);
   //packageSprite.collide(redbox3);
   

 
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
    // Look at the hints in the document and understand how to make the package body fall only on
   
	
	
  }
}



