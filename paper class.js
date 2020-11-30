class paperClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':17,
            'density':1
        }
        this.image = loadImage("paper.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}