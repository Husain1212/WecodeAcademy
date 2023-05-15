## Assignment create class account managment?

```
class Account {
  constructor(name, accountNo,amount,bank, address) {
    this.name = name;
    this.accountNo = accountNo;
    this.amount = amount
    this.bank = bank;
    this.address = address;

  }
  withdrwal() {
    console.log("Amount withdrwal by Account class parent........");
  }
    deposite() {
    console.log("Amount Deposite by Account class parent........");
  }
}
class Saving extends Account {
  constructor(name, accountNo,amount,bank, address) {
    super(name, accountNo,amount,bank, address);
    this.intrest = 6;
    this.minimumAmount = amount || 0;
  }
  deposite() {
    console.log("Amount Deposite ChildClass.............");
  }
}
class Current extends Account {
    constructor(name, accountNo,amount,bank, address) {
    super(name, accountNo,amount,bank, address);
    this.minimumAmount = amount > 10000 || 10000;
  }
}
const SBI = new Account("Taiyab",6566565656,1000,"Sbi Bank","jhotwara jaipur");
const savingHDFC = new Saving("Sohel",5656454545,10000,"HDFC","Mansrover jaipur");
const currentICICI = new Current("Farman",5454546565,12000,"ICICI","Sastri  nagar jaipur");
console.log(SBI,savingHDFC,currentICICI);
SBI.withdrwal();
SBI.deposite();
savingHDFC.deposite();
currentICICI.withdrwal();
savingHDFC.withdrwal();
```
