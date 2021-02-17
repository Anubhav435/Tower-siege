const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


var score = 0;


function setup(){
    var canvas = createCanvas(1999,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1999,20);

    box1 = new Box(740,320,70,70);
    box2 = new Box(960,320,70,70);
    

    box3 = new Box(740,240,70,70);
    box4 = new Box(960,240,70,70);
    box5 = new Box(850,160,70,70);
    box6=new Box (850,50,70,70);
    box7=new Box(850,20,70,70);
    box8=new Box (740,1,70,70);
    box9=new Box(740,1,70,70);
    box10=new Box(960,240,70,70);
    box11=new Box(740,1,70,70);
    box12=new Box(850,20,70,70)

    bird = new Bird(200,310);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:310});
}

function draw(){
        background("black");
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    bird.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    Matter.Body.setPosition(bird.body,{x:200,y:310})
      //  bird.trajectory=[]
       slingshot.attach(bird.body);
    }
}

