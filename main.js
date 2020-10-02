//template literal `${}`

//variables
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

var mouse = {
    x : 0,
    y : 0,
}

var gameState = {
    start : false,
    shop : false,
    battle : false,
}
var player = new Player;
var shop = new Shop;
//event listeners
window.addEventListener('mousemove',function(e){
    console.log(`x: ${e.x} | y: ${e.y}`);
    mouse.x = e.x;
    mouse.y = e.y;
});
//controls
var ctrlArr = []
window.addEventListener('keydown',function(e){
    ctrlArr[e.keyCode] = true;
});
window.addEventListener('keyup',function(e){
    ctrlArr[e.keyCode] = false;
});
function controls(){
    if(ctrlArr[32]){
        player.shoot();
    }
}
//physics
function collision(obj1, obj2){
    let collide = {
        x : false,
        y : false,
    }
    if((obj1.x > obj2.x + obj2.width) || (obj2.x > obj1.x + obj1.width)){
        collide.x = false;
    }else{
        collide.x = true;
    }
    if((obj1.y > obj2.y + obj2.height) || (obj2.y > obj1.y + obj1.height)){
        collide.y = false;
    }else{
        collide.y = true;
    }
    if(collide.x == false || collide.y == false){
        return false;
    }else{
        return true;
    }
}
//interaction
function transaction(coin,upgrade){
    //subtract coin amount from player object
    player.subtractCoin(coin)
    //set upgrade value
    player.modifyUpgrade(upgrade, 1);
    player.insertUpgrade();    
}
//loop
function loop(){
    if(gameState.start){
        if(gameState.battle){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            player.update();
        }else{
            //test for transaction
            if(shop.transactionReady){
                transaction(shop.currentTransaction.cost,shop.currentTransaction.type);
                shop.transactionReady = false;
            }
        }
    }else{

    }
    window.requestAnimationFrame(loop());
}
loop();