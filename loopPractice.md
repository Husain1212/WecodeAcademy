
### While loop
## print 1 to 10 numbers?
```
let i = 1;
while(i<=10){
    console.log(i)
    i++;
}
```
## print sum numbers
```
let sum = 0;
let i = 1;
while(i<=10){
    sum +=i;
    i++;
} console.log("The sum of all numbers:" , sum);
```
## print reverse number ? 
```
let i = 10;
while(i>=1){
    console.log(i)
    i--;
}
```
## print 2 numbers multiply upto 10 ?
```
let j = 2;
let i = 1;
while(i<=10){
    mult = i * j ;
    console.log(mult)
    i++;
}
```
## print all even number sum ?
```
let sum = 0;
let i = 1;
while(i<=100){
    if(i % 2 === 1){
       sum += i;
    }
  i++;
}
  console.log("The sum of all odd numbers:" , sum);
```


### Do While loop

## print 1 to 5 numbers?
```
let i = 1;
do{
    console.log(i);
    i++;
}while(i<=5);
```
## printreverse 1 to 10 numbers?
```
let i =10;
do{
    console.log(i);
    i--;
}while(i>=1);
```
## print all even number of sum ?
```
let i = 1;
let sum = 0;
do{
    sum += i;

    i++;
}while(i<=10);
console.log("The sum of all numbers:", sum);
```
## print 2 table  ?
```
let i = 1;
do{
    if(i % 2===0){
        console.log(i);
    } 
    i++;
}while(i<=20);
```
## print a "Hello world" by prompt ?
```
let user = Number(prompt("please enter a number?"));
let i = 1;
do{
    console.log("Hello world");

    i++;
}while(i<=user);
```
## print all even number of sum ?
```
let i = 1;
let sum = 0;
do{
    if(i % 2=== 0){
        sum +=i;

    }
    i++;
}while(i<=100);
console.log("The sum of all even numbers:",sum);
```
