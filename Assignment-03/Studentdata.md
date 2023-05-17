### Institute Details and Institute Student course and fees managment programm

## JavaScript Code....

```
class Institute {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.batches = new Map();
    this.fees = new Map();
    this.feesArray = new Map()
  }

   getFees(batchName){
      this.batches.get(batchName)
  }

  admission(batchName, student) {
    if (this.batches.has(batchName)) {
      const arr = this.batches.get(batchName);
      this.batches.set(batchName, [...arr, student]);
    } else {
      this.batches.set(batchName, [student]);
    }
  }
  feeDeposit(name,amount){
    if(this.fees.has(name)){
      let ans=this.fees.get(name)
      this.fees.set(name,[...ans,amount])
        }else{
          this.fees.set(name,[amount])
      }
  }

   totalFees(name) {
    let total = 0;
    if (this.fees.has(name)) {
      const amounts = this.fees.get(name);
      total = amounts.reduce((sum, amount) => sum + amount, 0);
      this.feesArray.set(name,[total])
    }
    console.log(` Student ${name.name} is deposited  total fees ${total}`)
  }


 printNumberOfStudentsInBatch(batchName) {
  if (this.batches.has(batchName)) {
    const students = this.batches.get(batchName);
    console.log(`${batchName}: ${students.length} students`);
  } else {
    console.log(`Batch '${batchName}' not found.`);
  }
}
}

const wecodeAcademy = new Institute("Wecode Academy", "Jhotwara, Jaipur");
class Student {
  constructor(id, name, fathername, mobile) {
    this.studentId = id;
    this.name = name;
    this.fathername = fathername;
    this.mobile = mobile;
  }
}
const raheel = new Student(1, "Raheel", "Khalil", 9345454543);
const arun = new Student(2, "Arun", "Ramesh", 98834455345);
const aadi = new Student(3, "Aadi", "Aakash", 99934545435);
const khan = new Student(4, "Khan", "husain", 9898787878);
const bhai = new Student(5, "mohan", "naveen", 909099898);
wecodeAcademy.admission("nodejs", raheel);
wecodeAcademy.admission("nodejs", aadi);
wecodeAcademy.admission("nodejs", khan);
wecodeAcademy.admission("nodejs", khan);
wecodeAcademy.admission("designing", arun);
wecodeAcademy.admission("designing", aadi);
wecodeAcademy.feeDeposit(raheel,3000)
wecodeAcademy.feeDeposit(raheel,3000)
wecodeAcademy.feeDeposit(khan,6600)
wecodeAcademy.feeDeposit(bhai,9000)

wecodeAcademy.feeDeposit(aadi,3000)
wecodeAcademy.feeDeposit(aadi,3000)
wecodeAcademy.feeDeposit(aadi,3000)
console.log(wecodeAcademy);
wecodeAcademy.totalFees(aadi)
wecodeAcademy.totalFees(raheel)

wecodeAcademy.printNumberOfStudentsInBatch("nodejs");
wecodeAcademy.printNumberOfStudentsInBatch("designing");

```
