const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground, divisions;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function preload(){
}

function setup(){
    createCanvas(600,800);

    myEngine=Engine.create();
    myWorld=myEngine.world;

    ground=new Ground(300,760,600,20);
    for(var k = 0; k <=width; k = k + 80){ 
        divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight)); 
    } 
    for(var j = 75; j <=width; j=j+50){
         plinkos.push(new Plinko(j,75)); 
    } 
    for(var j = 50; j <=width-10; j=j+50){ 
        plinkos.push(new Plinko(j,175)); 
    } 
    for(var j = 75; j <=width; j=j+50){ 
        plinkos.push(new Plinko(j,275)); 
    } 
    for(var j = 50; j <=width-10; j=j+50){ 
        plinkos.push(new Plinko(j,375)); 
    } 
}
    
    function draw(){ 
        background("black"); 
        //textSize(20) ("Score : "+score,20,30); 
        Engine.update(myEngine); 
        ground.display(); 
        for(var i = 0; i < plinkos.length; i++){ 
            plinkos[i].display(); 
        } 
        if(frameCount%60===0){ 
            particles.push(new Particles(random(width/2-30, width/2+30), 10,10)); 

        } 
        for(var j = 0; j < particles.length; j++){
            particles[j].display(); 
        } 
        for(var k = 0; k < divisions.length; k++){ 
            divisions[k].display(); 
        } 
    }

