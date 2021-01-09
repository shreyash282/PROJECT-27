class Rope {
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetx = offsetx
        this.offsety = offsety
        var option ={
          bodyA:bodyA,
          bodyB:bodyB,
          pointB:{x:this.offsetx,y:this.offsety}  

        }
        this.rope = Matter.Constraint.create(option);
        World.add(world,this.rope)
      }
      display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        strokeWeight(2);

        var Anchor1X = point1.x;
        var Anchor1Y = point1.y;

        var Anchor2X = point2.x + this.offsetx;
        var Anchor2Y = point2.y + this.offsety;

        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
      
      }

    }
