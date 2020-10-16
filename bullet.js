class Bullet{
    constructor(x,y,dx,dy){
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.bulletSpeed = 1;
        this.dx = dx;
        this.dy = dy;
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
        this.x += this.bulletSpeed*this.dx;
        this.y += this.bulletSpeed*this.dy;
        this.draw();
        this.behaviour();
    }
}
