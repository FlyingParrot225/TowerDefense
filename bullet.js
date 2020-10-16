class Bullet{
    constructor(x,y,dx){
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.bulletSpeed = 1;
        this.dx = dx;
        this.angle = -findAngle(mouse.x,mouse.y,player.centerX, player.centerY);
    }
    draw(){
        ctx.save()
        ctx.translate(this.x,this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.fill();
        ctx.restore();
    }
    behaviour(){
        
    }
    update(){
        this.x += this.bulletSpeed*this.dx;
        this.draw();
        this.behaviour();
    }
}
