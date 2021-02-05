class Plinko{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.1,
            friction:0.5,
            density:0.8
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push ();
        translate (pos.x,pos.y)
        rectMode(CENTER);
        fill ("purple");
        ellipse(0,0,this.r,this.r);
        pop ();
    }
    


}