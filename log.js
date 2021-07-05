class Log{
    constructor(x,y,height,angle){
        this.body=Bodies.rectangle(x,y,20,height,{restitution:0.5,density:0.5,friction:1.3});
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }

    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("red");
        strokeWeight(10);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }


}