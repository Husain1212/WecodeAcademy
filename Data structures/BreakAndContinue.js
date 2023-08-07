// continue example:

for(let index=1; index<=10;index++){
    if(index===5){
        console.log("five is missing")
        continue;
    }
    console.log(index)
}
console.log("Bahar aa gya loop se")

//Break example:

for(let index=1; index<=10;index++){
    if(index===5){
        console.log("iske aage nhi chlega....loop se bahar nikl jayega")
        break;
    }
    console.log(index)
}
console.log("Bahar aa gya loop se")