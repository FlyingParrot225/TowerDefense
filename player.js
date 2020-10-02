class Player{
    constructor(){
        this.towerWidth = 50;
        this.towerHeight = 50;
        this.towerX = (canvas.width - this.towerWidth)/2;
        this.towerY = (canvas.height - this.towerHeight)/2;
        this.centerX = this.towerX + this.towerWidth/2;
        this.centerY = this.towerY + this.towerHeight/2;
        this.turretWidth = 20;
        this.turretHeight = 40;
        this.turretX;
        this.turretY;
        this.turretAngle;
        this.hp = 5;
        this.fireRate;
        this.rotationSpeed;
        this.inventory = {
            coins : 0,
            upgrade : {
                hp : 0,
                fireRate : 0,
                coinMultiplyer : 0,
            }
        }
    }
    subtractCoin(amount){
        this.inventory.coins -= amount;
    }
    addCoin(amount){
        this.inventory.coins += amount;
    }
    modifyUpgrade(upgradeType, amount){
        let upgrade = upgradeType;
        if(upgrade == "hp"){

        }else if(upgrade == "fireRate"){

        }else if(upgrade == "coinMultiplier"){

        }else{
            return;
        }
    }
    insertUpgrade(){
        this.hp = 5 + this.inventory.upgrade.hp * 5;
        this.fireRate = 5 - this.inventory.upgrade.fireRate/10;
        this.coinMultiplier = 1 * (this.coinMultiplier + 1)
    }
    findAngle(x1, y1, x2, y2){
        let angle = Math.atan2(x1 - x2, -(y1 - y2));
        return angle;
    }
    rotateTurret(){
        this.turretAngle = this.findAngle(mouse.x,mouse.y,this.centerX, this.centerY);
    }
    shoot(){

    }
    draw(){
        ctx.fillStyle = "lightblue";
        ctx.strokeStyle = "black";
        ctx.fillRect(this.towerX,this.towerY, this.towerWidth, this.towerHeight);
        ctx.strokeRect(this.towerX,this.towerY, this.towerWidth, this.towerHeight);
        ctx.save()
        ctx.translate(this.centerX, this.centerY);
        ctx.rotate(this.turretAngle);
        ctx.fillStyle = "gray"
        ctx.fillRect(0,0,this.turretWidth, -this.turretHeight/2);
        ctx.strokeRect(0,0,this.turretWidth, -this.turretHeight/2);
        ctx.restore();
        ctx.fillStyle = "black";
    }
    update(){
        this.rotateTurret();
        this.draw();
    }
}
