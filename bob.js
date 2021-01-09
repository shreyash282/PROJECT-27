class Bob {
    constructor(x,y,radius){
        var option = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:2,
}
this.x = x
this.y = y
this.r = radius



this.body =Bodies.circle(this.x,this.y,this.r/2,option)
World.add(world,this.body)
    }
    display(){
        push ()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
       ellipse(0,0,this.r,this.r)
       pop ()
    }

}