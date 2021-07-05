class Pig{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,30,30,{restitution:0.5,density:0.5,friction:1});
        this.width=30;
        this.height=30;
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("green");
        strokeWeight(10);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }


}