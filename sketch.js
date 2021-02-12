const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[];
var maxDrops;
var umbrella;
var thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4;


function preload(){
    thunderbolt1=loadImage('1.png');
    thunderbolt2=loadImage('2.png');
    thunderbolt3=loadImage('3.png');
    thunderbolt4=loadImage('4.png');
    
}

function setup(){
   var canvas = createCanvas(500,700);

   engine = Engine.create();
   world=engine.world();

   umbrella=new umbrella(200,500);

   for(var i = 0; i < maxDrops; i++){
    drops.push(new createDrops(random(0,500), random(0,500)));
 }
    
}

function draw(){
    Engine.update(engine);
   background(night); 

    
    rand = Math.round(random(1,4));
    if(frameCount%80 === 0){
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break; 
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;
        }
        Thunder.scale = 0.7;
    }

    if(thunderCreatedFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }


   umbrella.display();

   for(var i = 0; i < maxDrops; i++){
      drops[i].display();
      drops[i].update();
  }

   drawSprites();
}   


