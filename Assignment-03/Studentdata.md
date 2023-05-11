### Institute Details and Institute Student course and fees managment programm

## JavaScript Code....

```
class Institute{
  constructor(name ,address){
    this.instituteName = name
    this.instituteAddress = address
    this.instituteBatch = new Map()
    this.batchfees = new Map()
  }
  addmission(batcheName,instituteStudent){
    if(this.instituteBatch.has(batcheName)){
      const students = this.instituteBatch.get(batcheName)
      students.push(instituteStudent)
      this.instituteBatch.set(batcheName, students);
    }else{
      this.instituteBatch.set(batcheName, [instituteStudent])
    }


  if(!this.batchfees.has(student.id)) {
      this.batchfees.set(student.id, []);
    }
  }
    feesDeposite(studentid,fees) {
      if(this.batchfees.has(studentid)){
        const amount = this.batchfees.get(studentid)
        amount.push(fees)
        this.batchfees.set(studentid, amount)
      } else{
        this.batchfees.set(studentid, [fees])
      }
}
}
class Student {
  constructor(id, name,fathername, course, mobile) {
    this.Studentid = id;
    this.name = name;
    this.fathername = fathername;
    this.course = course;
    this.mobile = mobile;
  }
}
const student = new Student("Mazeed.Node001","Mazeed khan","Aslam khan","Nodejs","9897878767")
const student1 = new Student("Taiyab.JavaScript0061","Taiyab Husain","Mohd.farid","JavaScript","9989887865")

const institute = new Institute("WeCode Academy","Jhotwara,Jaipur")
console.log(institute)
institute.feesDeposite("Mazeed.Node001",3000)
institute.feesDeposite("Mazeed.Node001",4000)
institute.feesDeposite("Taiyab.JavaScript0061",6000)
institute.feesDeposite("Taiyab.JavaScript0061",6000)
institute.addmission("Nodejs","Mazeed")
institute.addmission("JavaScript","Taiyab")
institute.addmission("JavaScript","Farman")
institute.addmission("Nodejs","Rafik")
institute.addmission("JavaScript","Aadil")
institute.addmission("Nodejs","Harsit")
```
