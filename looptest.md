## Ans-1 print 1 to 100 number
```
for(i = 1; i<=100; i++){
    console.log(i);
}
```
## Ans--2 print odd number
```
for(i = 1; i<=100; i++){
    if(i % 2===1){
        console.log(i);
    } 
}
```
## Ans--3 print  even number
```
for(i = 1; i<=100; i++){
    if(i % 2===0){
        console.log(i);
    }    
}
```
## Ans--4 print numbers 5 multiple
```
for(i =1; i<=100; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}
```
## Ans--5 print number 5 && 15 multiple
```
for(i =1; i<=100; i++){
    if(i % 5 === 0 && i % 15 === 0){
        console.log(i);
    }
}
```
## Ans--6 print 2 table of numbers
```
for(i =1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
```
## Ans--7 print number according to user
```
let user = Number(prompt("please enter number"))

for(i =1; i<=user; i++){
        console.log(i , "Helloworld");
    }
```
## Ans--8 print 1 to 100 all sum of number
```
let sum= 1;
for(i =1; i<=100; i++){
    sum = sum + i;}
        console.log("The sum of all numbers:", sum);
```    
## Ans--9  print between 1 to 100 sum odd numbers
```
let sum= 0;
for(i =1; i<=100; i++){
    if(i % 2===1){
        sum = sum + i;}}

        console.log("The sum of all odd numbers:", sum); 
}
```
## Ans--10print between 1 to 100 sum even numbers
```
let sum= 0;
for(i =1; i<=100; i++){
    if(i % 2===0){
        sum = sum + i;}}
        console.log("The sum of all even numbers:", sum);
```
## Ans--11print series 1,2,4,8,16,32,64.......upto 2048
```
for(i =1; i<=2048; i=i*2){
        console.log(i);
    }
``` 
## Ans-11print series of a,c,e,g.......upto last latter
```
for (i=97; i<=122; i++){
    console.log(String.fromCharCode(i))
}
```
## Ans-12 print 1 to hundred number when number start 11,21,31,----91
in new line?
```
for (let f = 1; f <= 100; f++) {
  if (
    f === 11 ||
    f === 21 ||
    f === 31 ||
    f === 41 ||
    f === 51 ||
    f === 61 ||
    f === 71 ||
    f === 81 ||
    f === 91
  ) {
    document.write("<br>");
  }
  document.write(f, ",");
}
```

```
for(let f = 1; f <= 100; f++){
    document.write(f,",") ;
    if(f % 10 === 0){
        document.write("<br>")
    }
}
```
## Ans-13 print fizzbuzz when number is divisble 3 && 5 in 1 to 100 ?
```
for(i =1; i<=100; i++){
    if(i % 3 ===0 && i % 5 === 0){
    console.log("fizzbuzz");
    }else {
        console.log(i);
    }
    }
```
## Ans-14 print 2 table according to this ..
```
2*1=2
2*2=4
2*3=6
.
.
2*10=20
```
```
for(i=1;  i<=10; i++){

        console.log("2" + "*" + i + "=" + 2*i);
    }
```

## Ans 15 print A B C D E in 10 series 1 T0 50
```
for(i = 1; i<=50; i++){
    if(i<=10){
        console.log("A");

    }if (i>10 && i<=20){
        console.log("B")
    }if (i>20 && i<=30){
        console.log("C")
    }if (i>30 && i<=40){
        console.log("D")
    }if (i>40){
        console.log("E")
    }
    
}
```
## Ans 16 print A B C D E in 10 series 50 TO 1 REVERSE
```
for(i = 50; i>=1; i--){
    if(i<=50 && i >40){
        console.log("A");

    }if (i>30 && i<=40){
        console.log("B")
    }if (i>20 && i<=30){
        console.log("C")
    }if (i>10 && i<=20){
        console.log("D")
    }if (i<=10){
        console.log("E")
    }
}
```
## Ans 17- Print 5 multiple number between 1 to 1000 ?
```
for(i =5; i<=1000; i=i*5){
        console.log(i);
    }
```
## Ans 18- Print 3 multiple number between 1 to 500 ?
```
for(i =3; i<=500; i=i+3){
        console.log(i);
    }
```
## Ans 19- Print two series 1 to 10 and 20 to 29 ?
```
let j = 20;
for(i = 1; i<=10; j <=29 , j++ ,i++){
    document.write(i,j);
    document.write("</br>");
}
```
```
for (let i = 1, j = 20; i <= 10; i++, j++) {
  console.log(i + "" + j);
}
```
## Ans 20 print reverse 5 multiple number 100 t0 1 ? 
```
for(i=100; i>=0; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}
```
## Ans 21 find numbers if 70 divisble   between 1 to 70 number ?
```
for(i=1; i<=70; i++){
    if(70 % i === 0){
        console.log(i)
    }
}
```
