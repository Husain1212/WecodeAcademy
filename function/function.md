### Question  1. Function ko 1 number pass krna hai. jo number pass kia hai us number ki table print krni hai. for example 5 
```
5*1=5
5*2=10
```
```
function table(a){
    for(i = 1 ; i<= 10; i++){
        for(j = 1 ; j<=1; j++){
            let numm = a + "*" + i + "=" + i*a
            console.log(numm)
        }
    }
} table(5)

```
### Question 2. Function ko 2 numbers pass krne hai. Numbers ko multiply krna hai 

```
function multiply(a,b){
 console.log(a*b)
} multiply(5,2)

```


### Question 3. Function ko array bnana hai and array ke sare numbers ko print krna hai 

```

let array_new = [1,3,2,3,4,5,2,6,7,8]
for(i = 1; i< array_new.length; i++){
    console.log(array_new[i])
}
```

### Question 4. Function bnana hai. Function me ek value leni hai. agar value true hai to Yes print kro otherwise No print kro

```
function trueFalse (a){
    if( a > 0 ){
        console.log("Yes")
    } else {
        console.log("no")
    }

} trueFalse(7)
trueFalse(-7)

```
### Question 5. Function bnana hai. Function ko 2 numbers pass krne hai min and max. for example 10 and 20 to tume 10 se leke 20 tak print krvana hai 


```

function minMax(a,b){
for(i = a; i<= b; i++){
    console.log(i)
}
} minMax(10,20)


```

### Question 6. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Odd numbers hai vo print krne hai.


```
function oddNum(a){
    for(i = 0 ; i<= a; i++){
        if(i % 2 === 1){
            console.log(i)
        }
    }
} oddNum(19)

```

### Question 7. function bnana hai. Function ko 1 number pass krna hai. 0 se leke us number tak jitne b Even numbers hai vo print krne hai.


```
function oddNum(a){
    for(i = 0 ; i<= a; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
} oddNum(26)

```

### Question 8. Ek function bnana hai. Is function ko 2 number pas krne hai. phla number ek number hoga aur dusra number maximum number hoga. fir hume phle number ke multiples max number tak print krne hai.for example: 5, 100 5 10 15 20 25...... 100

 
 
```
function multimax(a,b){
    for (let index = 1; index <= b; index++) {

        if(a*index > b){
        } else {
            console.log(a*index)
        }
    }
    // for(i = a; i<= b; i++){
    //     console.log(i )
    // }
} multimax(5,100)

```
