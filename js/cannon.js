class Cannon {
  constructor(x, y, w, h,angle) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle=angle;

    var options = {
      isStatic: true,
      
    };

    this.body = Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      options
    );
    World.add(world, this.body);

    this.image=loadImage('assets/CANON.png')
  }
  display() {
    var pos = this.body.position;
    // var angle = this.body.angle;

    // ASCII american sandard code of information

    if (keyCode===RIGHT_ARROW && this.angle<0.95){
      this.angle+=0.02

    }

    if (keyCode===LEFT_ARROW && this.angle>-2.0){
   this.angle-=0.02

    }

    // console.log(this.angle)


    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    imageMode(CENTER)
    image(this.image,0,0,this.w,this.h)
    // rect(0,0, this.w, this.h);
   
    pop(); 
     fill("grey");
     arc(this.x-10,this.y+100,160,200,PI,TWO_PI)
  }
}
