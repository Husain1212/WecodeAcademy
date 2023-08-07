## 1. Write a function that takes a string and returns a new string with all the words reversed using the spread operator.
```
function reverseStr(words){
    console.log(words.reverse())
}
let str = "HelloWorld"
reverseStr([...str]) //using the spread operator.

```
## 2. Create a function that takes in an array and uses the rest operator to remove the first element from the array and finally return the array without first element.
```

function removeFirstElement(array_1){
    let [,...arr] = array_1;
    return arr
}
console.log(removeFirstElement([1,2,3,4,5]))

```
## 3. Create a function that takes in an unknown number of arrays and uses the rest operator to flatten them into a single array
```

let arr11=[1,2,3]
let arr12=[3,2,1]
let arr13=[4,5,6]
function flattenArray(arr){
 console.log([...arr])
}
 flattenArray([...arr11,...arr12,...arr13])

```
## 4. Write a function that takes an object as a parameter and returns the value of its "x" property if it exists, otherwise it returns null. Hint : (Use optional chaining)
```


```
## 5. Write a function which takes in an array and create two separate arrays for odd numbers and even numbers and finally merge them in the order that all odd numbers will move to the left of the array and all even numbers to right of the array.
```
let arrayNum = [1,2,3,4,5,6]
function oddEven(array){
    let odd = []
    let even = []
    for(i = 0; i<array.length;i++){
        if(array[i] % 2 === 0){
            even.push(array[i])
        }else{
            odd.push(array[i])
        }

    }
    return [...even,...odd]
}
console.log(oddEven(arrayNum))


```
## 6. Create an array of numbers. Now change the position of each element with their next element. 
```
For example : [1,2,3,4,5,6,7]
Output : [2,1,4,3,6,5,7]
```
```
function swapElement(ar_1){
for(i=0;i<ar_1.length;i+=2){
    let temp = ar_1[i]
    ar_1[i]=ar_1[i+1]
    ar_1[i+1]=temp
}   
return ar_1
} 
let myArray =[1,2,3,4,5,6,7,8]
console.log(swapElement(myArray))


```
## 7. Ask user below questions 
```
What is your age  : 12
What is your mobile : 9581894461
What is your address : Jaipur
```

Now create an object and use enhanced object literal property computation to create below object 
```
{
    age12 : 12
    9581894461 : 'Mobile',
    Jaipur12Address : 'Jaipur'
}
```

```

et age = Number(prompt("What is your age"))
let mobile = Number(prompt("What is your mobile"))
let address = prompt("What is your address")

const obj ={
    ["Myage" + age] : age,
    [mobile] : "mobile",
    [address+age+"Address"]: address
}
console.log(obj)


```
## 8. Using enhanced object literal function, create a function sum which takes an array as parameter and return sum of all the numbers in the array.
```

let obj ={
    sum : function (sum){
        let count = 0
        for(let value of sum){
            count = count + value
        }
        console.log(count)
    }
}
obj.sum([1,2,3,4,5])



```
## 9. Take a number and check if number is greater than 80 or not. If yes then assign 100 to number else assign 200. Use short circuiting whereever possible. 
```

let num = 9
num = num > 80 ? 100 : 200;
console.log(num)

```
## 10. Create an array of 10 numbers. Now create a new array of 0 and 1 using Array destructring based on if number is odd then 1 else 0
```
Array : [1,2,3,4,5,6,7,8,9]
Output: [1,0,1,0,1,0,1,0,1,0]
```
```
let arr_11 = [1,2,3,4,5,6,7,8,9]
for(i= 0;i<arr_11.length;i++){
    if(arr_11[i] % 2 === 0){
        arr_11[i]=0
    } else{
        arr_11[i]=1
    }
}
console.log([...arr_11])


```
## 11. Given an array of price, use map function to return a new array where each price is converted to new price including tax, which is the price with a 10% tax added.
```


```
## 12. Given an array of strings, use reduce to return the total number of characters in all the strings.
```
let string = ["hello","World","hii","Taiyab"];
let total_Number = string.reduce(totalChar, 0);
function totalChar(total, value) {
return total + value.length;
}
console.log(total_Number);


```
## 13. Given an array of strings, use map and reduce to return the total number of characters in all the strings with a length less than 5.
```
let string_2 = ["hello","World","hii","Taiyab"];
let new_String = string_2.filter(smallStr);
let str_2 = new_String.reduce(number, 0)

function smallStr(str) {
return str.length < 5;
}

function number(totals, values) {
return totals + values.length;
}
console.log(str_2);


```
## 14. Given an array of numbers, use map, filter, and reduce to return the sum of all the odd numbers multiplied by 3
```

let num1=[1,2,3,4,5]
let num2 = num1.filter(test)
let num3 = num2.map(test2)
let num4 = num3.reduce(testy)

function test(val) {
return val % 2 === 0 ;
}
function test2(value){
    return value*3
}
function testy(total,secondvalue){
    return total+ secondvalue
}
console.log(num4)


```
## 15. Given a string, reverse the order of the words in the string. For example, "the quick brown fox" becomes "fox brown quick the".
```
let str_word = "the quick brown fox"
let string_to_array = str_word.split(" ") 
console.log(string_to_array.reverse().join(" "))

```
