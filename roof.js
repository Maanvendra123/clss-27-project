class Roof{
    constructor(x,y,width,height){
        var ground_options ={
            isStatic: true
        }
    
       this.roof = Bodies.rectangle(x,y,width,height,ground_options);
       this.width=width
       this.height=height
        World.add(world,this.roof);   
    }
    display(){
        var pos=this.roof.position
        push ()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill ("black")
        rect(0,0,this.width,this.height)
        pop ()
    }
}