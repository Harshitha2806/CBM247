class Dustbin {
    constructor(x, y) {
      var options = 
      {
          isStatic : true
      
      }

      this.x = x;
      this.y = y;
      this.dusbinWidth = 200;
      this.dustbinHeight=213;
      this.wallThickness=28;

    
      this.image=loadImage('dustbingreen.png');
      this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThikness, options);
      this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight, this.wallThickness, this.dustbinHeight,this.dustbinWidth, options);
      this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,this.dustbinWidth,options);

      World .add(world,this.bottomBody);
      World. add(world,this.leftWallBody);
      World. add(world,this.rightWallBody); 
    }
      


    display(){

    var posBottom=this.bottomBody.position;
    var posLeft=this.leftWallBody.position;
    var posRight=this.rightWallBody.position;

      //var pos =this.body.position;
      var angle = this.angle;

      push();
      translate(posLeft.x,posRight.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(225);
      rotate(angle);
      //image (this.image,0,0,this.width,this.height);
      pop ();




      push();
      translate(posRight.x,posRight.y);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(225)
      rotate(-1*angle)
      pop(); 


      push();
      translate(posBottom.x,posBottom.y+10);
      rectMode(CENTER);
      angleMode(RADIANS);
      fill(225);
      imageMode(CENTER);
      image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight);
      pop();
    }
  }
  