class Bird{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,50,50,{restitution:0.5,density:1.5,friction:1});
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }

    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        push()
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle)
        stroke("blue");
        strokeWeight(10);
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }


}