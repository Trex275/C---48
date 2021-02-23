class Maze {
    constructor(x, y, width, hieght) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, options);
        World.add(world, this.body);
        this.width = width;
        this.hieght = hieght;

    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.hieght)
    }
} 