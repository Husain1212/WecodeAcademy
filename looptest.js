Ans-1-------------
for(i = 1; i<=100; i++){
    console.log(i);
}

Ans--2---------------odd number

for(i = 1; i<=100; i++){
    if(i % 2===1){
        console.log(i);
    }
    
}

Ans--3---------------even number

for(i = 1; i<=100; i++){
    if(i % 2===0){
        console.log(i);
    }
    
}

Ans--4--------------------5 multiple

for(i =1; i<=100; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}


Ans--5--------------------5 && 15 multiple

for(i =1; i<=100; i++){
    if(i % 5 === 0 && i % 15 === 0){
        console.log(i);
    }
}

Ans--6--------------------2s table

for(i =1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

Ans--7--------------------print according to user


let user = Number(prompt("please enter number"))

for(i =1; i<=user; i++){
        console.log(i , "Helloworld");
    }


Ans--8--------------------add sum number
let sum= 1;
for(i =1; i<=100; i++){
    sum = sum + i;
        console.log(sum);
    
}


Ans--9--------------------add sum number odd
let sum= 0;
for(i =1; i<=100; i++){
    if(i % 2===1){
        sum = sum + i;
        console.log(sum);
    }
    
    
}

Ans--10--------------------add sum number even
let sum= 0;
for(i =1; i<=100; i++){
    if(i % 2===0){
        sum = sum + i;
        console.log(sum);
    }
    
    
}


Ans--11--------- print 1,2,4,8,16,32,64.......upto 2048


for(i =1; i<=2048; i=i*2){
        console.log(i);
    }
    
Ans-----------print a,c,e,g.......upto last latter

for (i=97; i<=122; i++){
    console.log(String.fromCharCode(i))
}


Ans-12----------------------------------------


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


Ans-13----------------------------------------


for(i =1; i<=100; i++){
    if(i % 3 ===0 && i % 5 === 0){
    console.log("fizzbuzz");
    }else {
        console.log(i);
    }
    }

Ans-14----------------------------------------

for(i=1;  i<=10; i++){

        console.log("2" + "*" + i + "=" + 2*i);
    }

Ans 15-----------------------------------

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

Ans 16-------------------------------

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

Ans 17---------------------------

for(i =5; i<=10000; i=i*5){
        console.log(i);
    }

Ans 18--------------------------
for(i =3; i<=500; i=i*3){
        console.log(i);
    }

Ans 19---------------------------

let j = 20;
for(i = 1; i<=10; j <=29 , j++ ,i++){
    
    document.write(i,j);
    document.write("</br>");

}




Ans 20-------------------------------

for(i=100; i>=0; i--){
    if(i % 5 === 0){
        console.log(i);
    }
}

Ans 21-------------------------
for(i=1; i<=70; i++){
    if(70 % i === 0){
        console.log(i)
    }
}