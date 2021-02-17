class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    
  }
  display(){
super.display()
push()
  strokeWeight(32);
  stroke("white");
   pop();
 
  }

};
