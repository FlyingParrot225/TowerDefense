class Bullet{
    constructor(x,y,dx,dy){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = 10;
        this.bulletSpeed = 1;
    }
    draw(){
        ctx.save()
        ctx.translate(this.x, this.y);
        ctx.rotate(-findAngle(mouse.x,mouse.y,this.x, this.y));
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.restore();
    }
    behaviour(){
        
    }
    update(){
        this.x += 5*this.bulletSpeed;
        this.draw();
        this.behaviour();
    }
}
