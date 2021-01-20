class Rope{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointb:pointb,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointb=pointb;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
        
    
    }display  (){
        var pointa=this.rope.bodyA.position
        var pointb=this.pointb;
        Push();
        strokeWeight(3.5)
        line (pointa.x,pointa.y,pointb.x,pointb.y)
        pop();
    }
}