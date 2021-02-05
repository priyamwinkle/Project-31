const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground, divisions;
var particles=[];
var plinkos=[];
var divisions=[]
var divisionHeight=300;

function preload(){
}

function setup(){
    createCanvas(600,800);

    myEngine=Engine.create();
    myWorld=myEngine.world;

    ground=new Ground(300,760,600,20);
    for(var k=0;k <=innerWidth; k=k+50){
        divisions.push(new Division(k,height-divisionHeight/2, 10,divisionHeight));
    }
}

function draw(){
    background("black");

    Engine.update(myEngine);
    
    ground.display();
    divisions.display();

}

