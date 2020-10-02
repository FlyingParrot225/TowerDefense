class Player{
    constructor(){
        this.towerWidth = 50;
        this.towerHeight = 50;
        this.towerX = (canvas.width - this.towerWidth)/2;
        this.towerY = (canvas.height - this.towerHeight)/2;
        this.centerX = this.towerX + this.towerWidth/2;
        this.centerY = this.towerY + this.towerHeight/2;
        this.turretWidth = 40;
        this.turretHeight = 10;
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
    findAngle(x,y){
        let length1 = x;
        let length2 = y;
        let angle = Math.atan(length2/length1);
        return angle;
    }
    rotateTurret(){
        let length1 = mouse.x - this.centerX;
        let length2 = mouse.y - this.centerY;
        this.turretAngle = this.findAngle(length1,length2);
    }
    shoot(){

    }
    draw(){
        ctx.fillStyle = "lightblue";
        ctx.strokeStyle = "black";
        ctx.fillRect(this.towerX,this.towerY, this.towerWidth, this.towerHeight);
        ctx.strokeRect(this.towerX,this.towerY, this.towerWidth, this.towerHeight);
        ctx.save();
        ctx.translate(this.centerX, this.centerY);
        ctx.rotate(this.turretAngle);
        ctx.fillStyle = "gray"
        ctx.fillRect(this.turretX,this.turretY,this.turretWidth, this.turretHeight);
        ctx.strokeRect(this.turretX,this.turretY,this.turretWidth, this.turretHeight);
        ctx.restore();
        ctx.fillStyle = "black";
    }
    update(){
        this.rotateTurret();
        this.draw();
    }
}
