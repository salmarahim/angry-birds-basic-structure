

class Box{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height,{restitution:0.5,density:0.5,friction:2});
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("yellow");
        strokeWeight(10);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }


}