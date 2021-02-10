class Particles{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.5,
            density:0.8
            
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(myWorld,this.body)
    }
    display(){
        var pos=this.body.position;
        push ();
        translate (pos.x,pos.y)
        rectMode(CENTER);
        fill ("blue");
        ellipse(0,0,this.r,this.r);
        pop ();
    }
    


}