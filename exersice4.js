/*1.Take two numbers and take a value which should be the sum of the two numbers plus 
some other number. Now findout the 3rd number.*/

// let num1 = 10;
// let num2 = 20;
// let sum = 50;

// let num3 = sum - (num1+num2);

// console.log(num3);


/* 2. Ask the below questions:

What is your English marks in 10th?
What is your Science marks in 10th?
What is your Math marks in 10th?
What is your Hindi marks in 10th?
What is your SST marks in 10th? Now calculate percentage by taking all the 5 subjects numbers.
*/

// let english =Number(prompt("what is your marks in english?"));
// let science = Number(prompt("what is your marks in science?"));
// let maths = Number(prompt("what is your marks in maths?"));
// let hindi = Number(prompt("what is your marks in hindi?"));
// let sst = Number(prompt("what is your marks in sst?"));
// let percentage = (english+science+maths+hindi+sst)/500 *100 ;

// console.log(percentage + "%");


/*3. In which century were your born? find out by asking birth year. 
Use Math.floor function to remove decimal portion of the century.
 */

// let birth = 1994;

// let birthYear = birth/100

// console.log(Math.floor(birthYear));




/*4.Add 20 in your name and check value in console. 
Add true to your name and check output Add 30+"Wecode" and check type of the final value.
 */

// const name = "Taiyab";
// let num = 20;
// let value = true;
// console.log(name+num);
// console.log(value+name);
// let newName = 
// console.log(typeof (30+"Wecode"));

/*5.Create Reverse Game. Ask any question with 2 possible answers. 
If user selects first option then show second option in alert and vice versa.
 */

// let game = prompt("what is your name?");
// let age = Number(prompt("what is your age?"))

// if(!(age>21)){
//     alert(game + "- you are adult")
// }else{
//     alert(game + "- you are child")
// }



/* 6.Test below conditions using &&, || and not logical operators. 
Take any number check if number is even and also check if number is divisable of 4 or not. 
If both conditions are true then check if number is less than 100 or number is 84 or not.
*/

// let number1 = Number(prompt("please enter number?"));

// if((number1%2 === 0 && number1 % 4 === 0)&&(number1<100 || number1 === 84) {
//     console.log("even");
// }else{
//     console.log("odd");
// }

/*7 Take city temprature. If temp is less than 10 degree then print very cold. If city temp is less than 30 and greater than equal to 10 then print cold. If temp is between 30 to 40 then print Hot. Else print Very hot

*/

// let temprature = Number(prompt("please enter temp.?"));

// if(temprature<10){
//     console.log("Today is very cold");
// } else if(temprature< 30 && temprature >=10){
//     console.log("Today is cold");
// } else if(temprature>=30 && temprature<=40){
//     console.log("Today is hot");
// } else {
//     console.log("Today is very hot");
// }

/* 8 Using prompt ask user about his/her age. If user is greater than 18 then show user message "Do you want to open account?" If yes click on Okay button then ask your 4 below questions

What is your name ?
What is your aaadhar number ?
What is your address?
What is your mobile number? and print all these details in console. If click on cancel then show message "Sorry, please visit again."
*/

// let myAge = Number(prompt("please enter your age?"))



// if(myAge>18){
//     confirm("Do you want to open account")
//     console.log(prompt("What is your name ?"))
//     console.log(Number(prompt("What is your aaadhar number ?")))
//     console.log(prompt("What is your address?"))
//     console.log(Number(prompt("What is your mobile number?")))
// } else {
//     alert("Sorry, please visit again.")
// }


// let game = prompt("which game you want to play");
// if(game === "candycrush"){
//     alert("loudoMaster");
// }else if(game === "ludoMaster"){
//     alert("candaycrush");
// }else {
//     alert("This game not in my system");
// }



/* 9 Create a simple calcultor. Firslty ask your about the operation. 
Like "What do you want to do?" User can type choice in any way 
like +,- or plus, minus or add, sub etc. After that 
ask user about first number and then second number and 
finally show the desired output.*/

// let calcultor = prompt("What do you want to do");
// let num8 = Number(prompt("put first number?"));
// let num9 = Number(prompt("put second number?"));

// if(calcultor === "+"){
//     console.log(num8+num9);
// }else if(calcultor === "-"){
//     console.log(num8-num9);
// }else if(calcultor === "*"){
//     console.log(num8*num9);
// }else if(calcultor === "/"){
//     console.log(num8/num9);
// }else {
//     console.log("please Enter valid operation");
// }


/* 10Who is most intelligent in your family? Ask 10th percentage of each family member and 
check who got the highest marks. If total family members are more than 4 then 
you can use Math.max() function */


// let taiyab = 75;
// let husain = 70;
// let farman = 77;
// let ismail =  80;
// let sameer = 76;

// console.log(Math.max(taiyab,husain,farman,ismail,sameer));