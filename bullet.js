class Bullet{
    constructor(x,y,dx,dy){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = 10;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
    }
    behaviour(){
        
    }
    update(){
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
        this.behaviour();
    }
}
