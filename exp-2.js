class bankAccount{
    constructor(accountNumber, holderName, balance){
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log("Deposited: " + amount);
    }
    widthdraw(amount){
        if(amount > this.balance){
            console.log("Insufficient balance");
        } else {
            this.balance -= amount;
            console.log("Withdrawn: " + amount);
        }
    }
    displayBalance(){
        console.log("Account Number: " + this.accountNumber);
        console.log("Holder Name: " + this.holderName);
        console.log("Balance: " + this.balance);
    }
    static Bankinfo(){
        console.log("bank name : rbc");
        console.log("General information : Royal Bank of Canada : Safe and secure banking services.");
    }
}

let acc1 = new bankAccount(12345, "John Doe", 1000);
let acc2 = new bankAccount(67890, "Jane Smith", 500);

bankAccount.Bankinfo();


console.log("Account 1 details:");
acc1.displayBalance(2000);
acc1.widthdraw(1500);
acc1.displayBalance();

console.log("\n----Account 2 details: ----");
acc2.displayBalance(10000);
acc2.widthdraw(1700);
acc2.displayBalance();