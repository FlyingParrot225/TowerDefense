class Transaction{
    constructor(cost, type){
        this.cost = cost;
        this.type = type;
    }
}
class Shop{
    constructor(){
        this.transactionReady = false;
        this.currentTransaction;
    }
    makeTransaction(cost, type){
        this.currentTransaction = new Transaction(cost, type)
    }
}
