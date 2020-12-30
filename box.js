class Box {

    constructor(x,y,w,h){
 
    this.body= Matter.Bodies.rectangle(x,y,w,h,{isStatic:true});
    Matter.World.add(world, this.body);
    this.width=w;
    this.height=h;
 }
 
 show(){
 fill ("red");
 rectMode(CENTER)
 rect(this.body.position.x, this.body.position.y,this.width,this.height)
 
 }
 
 
 }