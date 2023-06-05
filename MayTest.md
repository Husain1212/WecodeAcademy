### Question 1. JavaScript engine kya hai. Most famous JavaScript engine ki list btao.

```
Answer - java script engine ek computer ka programme h jo ki javascript code
ko excute karta h. iska kam hota h ki javascript code(human readable code) ko
machinery code m convert karta h jis se programm excute hota h is process ko
hum compilation bhi bol skte h. javascript engine web browser k under built
in hota h. alg alg browser k liy ek alg alg engine usa hota h example:


V8 Engine = y google crome use karta h
spiderMonkey = mozilla browser use karta h
javaScriptCore = y engine Apple k safari m use karte h
chakra = this java script for microsoft edge

Javascript Engine ka main use javascript code ko machine code m convert karna
hi hota h. jis trh human like hindi english franch and jarman etc language
use karta h pure world m lekin hindi sirf indian smj skta h usi trh jarmani
wale jarman . jab koi indian man jarman jayega to wah waha pr koi
translator man hota h jisko jerman or hindi aati h jo hindi ko jerman m
badlta h or isi translator ko hum computer ki language m Javascript
Engine kehte h. jo code apn likte h wo human readable hota h or
javasript Engine Human code se machine code m convert karta h or
programm excute hota h.

```

### Question 2. this keyword ka use btao. This keyword ke different uses hai unhe explain kro with example

```
In javascript this keyword window object ko refer karta h.this key word object
ko call karne ka kam karta h kyuki object key value pair m data store karta h
to isme this.Keyname se call karnege to object m us key m jo bhi value hogi
wo call ho jayegi.

This keyword ke different uses:

jab bhi this ko console.log m print karwate h to wo hume window Object retrun
karega to by default this is refer to global object.

console.log(this)// Window {window: Window, self: Window, document: document, name: '', location: Location}

this keyword is refer to object method in function

let obj = {
    fName: "taiyab",
    lName : "husain" ,
    age : 28,
    fullName : function(){
        return this.fName + " " + this.lName
        }
}
console.log(obj.fullName())

jab use strict k sath this ka use karte h tab y hume undefined result deta h

"use strict"
   function myFunction() {
  return this.name;
}

myFunction()// undefined

```

### Question 3. Difference between Json and XML

```
Json is a Javascript object Notation and XML is a Extensible markup language both are
recive  data from wab browser.

JSON fast h  XML k comparission m.
Json data recive from cleint to server and server to cleint
JSON is supported  JavaScript, Python, Perl, and Ruby.
JSON javascript language ko support karti h. JSON m data key value k pair m hota h like object:  key or value dono "" qutes m likte h
let person = {
    "name" :"Taiyab"
    "address" : "jaipur"
}

JSON ko { } cerlibrackets m likhte h
JSON ko easily smj skte h.


XML is data transfer to between system and applications.
XML data  supports many different programming languages: JavaScript, PHP, and
C++.
XML uses similar tags of HTML.
XML Markup language ko support karti h isme html ki trh tag kam m lete h.
XML ko <></> tag m likhte h.
XML ko smjna toda tuff rehta h.
```

### Question 4. In memories ke bare me btao ? Heap, Cache, Stack, Ram

```
Heap memorry - Heap memory object or other data store karne k liy use hoti h.
Heap memorry m ek address hota h jaha uska data store rehta h.Heap memorry is
a large memory h. lekin jese jese isme memory add hoti rehti h wese iski
speed kam hoti jati h. or jab bhi hum koi object bnate h to vo object heap
memory m creat ho jata h ek perticular address k sath jisko hum easily
excute kar pate h .
```

```
Cache Memory -Cache memory ko sirf CPU hi access karta h. Cache memory is a
high speed memory.y memory ki size kam hoti h lekin main memory(RAM) k
compersion m fast h.  it is hold the data and programm and (CPU uses
frequently) CPU apne use k hisab se kam m leta h data.isko hum high speed
CPU wale  k sath kam m lete h jisse uski performance ko acha bnata h
```

```
Stack Memory - Stack memory is a temprory data storage memory. in this memory
store function and veriables.jab bhi hum koi function call karte h to
excution contex m jata h or ek stack memory m add ho jata h.or ab agr koi
dusra function bnate h or  to wo bhi stack memory m add ho jata h. Stack
memory mostly FILO(FIRST IN LAST OUT) kam karta h ab jese hi dusra wala
function excute hoga or complet rum hoga to wo stack memory se remove ho
jayega ab jo fisrt wala function call hoga or excute ho kr complete hoga
to wo bhi stack memory se remove ho jayega
```

```
RAM - Random Access Memory y ek computer or smartphone m use hoti h. jo ki data
ko excess krne k kam aati h.kisi bhi system m RAM ki memoery jyada hogi to
system utna hi acha chlega. kyuki jyada memory hogi to data store easily
karega or fast run karega.RAM ka main kam stores data ko fastly processor
tak puhchana hota h.RAM application ko load karna, internet browser ko
access karna,kisi bhi high loaded fill ya app ko easily run karwana.
```

### Question 5. Write difference between compiler and interpreter with example

```
Compiler - Compiler ek software h jo ki  human readable code ko machinery code
m covert karna jis se computer easily us code ko smj aa ske.

compiler ka kam hota h agr humne koi bhi code likha (HTML JavaScript etc) to
compiler us code k syntex ko read karega or compile krega compile file ko
machinery code (binery code) m change karega ab wo code run karenge to wo
binery code ko easily read access kar ke run kar dega.example:

let a = 5
let b = 5
console.log(a+b)// 10

in binery code machine code
1010

Human readable code----------> Compiler---->Compile file--------->Machine code


interpreter -  Interpreter bhi ek softwer h jo ki code(javascript code) ko machine code m
convert karta h. interpreter line by line code ko check karta h or in time programm ko
excute karta h.Javascript is a interpreter
langauage.  interpreter compiler k compersion
m fast run karta h.isme Error agr koi bhi
line pr aati h to wo aage chlega hi nhi whi
ruk jayega.

Human readable code---------->INTERPRETER-------------->Machine code

```

### Question 6. Write difference between creation phase and code phase

```
creation phase- Creation phase koi bhi softwer ya appliction bnate h to uska
first step hota  h isme hum y batayenge ki jo application bnayeneg to use kese
desing karna h or client ki side se pta karenge ki usme kya kya add karna h
uske according hi application ya softwer ko tyar karenge.

kisi bhi softwer ko bnane k jo data use karte h jese ki
Creation globle object:
Creation of this key word:
Creation of the scope chain:
veriable decleration:
function decleration
y sbhi softwer ko create karne k liy use lete h

Code phase- Code phase m jo bhi code apn n likha h usko parsing , compiling
ang excution code ek perticular order m check karenge. y order javaScript
language k order m chlte  h.

JavaScript ka code phase m first phase h Parsing ka isme Javascript engine
code ko read karega or convert karega AST (Abstact syntax tree).AST
javascript engine k use se us code ko bytecode m badlega jo ki excute hone k
liy easy rahega orignal code se.

Comiling - a Javascript engine excute code karega bytecode jo ki parsing se
bnaya gya h. ab compling isko machine code m genrate karegi or machine code ko
excute karega direct CPU .

Execution - javascript runs the code and check the code and each statment

according to perticular languages rules. evalutes calling function , assing
the value of variables and if else and loop etc.
```

### Question 7. Primitive and non primitive data types me difference btao and memory me kaise save hoti hai ye data types vo b btao?

```
Primitives are most data type of Javascript y data type immutable hoti h jinko ek
bar create  karne k bad change nhi kar skte h.
inko value k dwra store kiya jata h
inme six type k data type include hote h....
isme ek variable ki ek hi value add hoti h jisko change nhi kar skte h

Number- it represents numeric value.
String - it represents text data.
Boolean - it is logical value true and false.
Null - jisme koi bhi value nhi di ho
Undefined -  jb koi veriable declare karte h lekin usme koi value assign nhi karte h tu undefined result aata h
Symbole - y ek unique idenfier ko btata h
```

```
let a = 5;
let b = "taiyab"
let c = true
let d = null
let e;
let f = Symbol("description");

```

```
Non-Primitives Data type.
is data type m refrence k dwr value store karte h.
y data type two type m hoti h jo ki Object or Array ki form m hoti h
isme ek object ya array m bahut sari value add kar skte h.
isme value ko change kar skte h
```

```
let obj = {
    name = "taiyab",
    age = 29,
    adress = "jaipur"
} // store many details in this object

obj.name = "Sajid"// change the value
```

### Question 8. Shallow copy vs deep copy me difference likho with example

```
Shallow Copy : jab bhi hum kisi array ya object ki copy karte h to object1 ki
details sab object2 m aa jati h. lekin jab hum object1 m oi change karte h to
wo  object2 m change ho jate h is condition m Javascript m hum jab bhi koi
object array ko copy karte h to (...object1) is syntex se copy karte h ab
jab bhi hum koi object duplictae bante h or usme koi change karte h to
pehle wale m changes nhi hoge.
but jab object k ander object hoga to shallow copy method kam nhi karge or dono object m
changes show dikhenge.

const object1 = {a: 1, {c: 2}};
const object2 = {...object1};
object2.a = 4
object2.c = 5
console.log(object1)//{a: 1, {c: 5}}
console.log(object2)//{a: 4, {c: 5}}

// isme a ki value ek object2 m hi change ho gyi lekin c ki value dono object
 m change ho gyi

```

```
Deep Copy : - Deep copy m agr kisi object m nested object h to tab is copy ko use karte h.
kyuki jab hum first object ki copy karte h or usme nested object h to hum object ki copy
karte h dono object m value change hoti to hum DeepCopy ka use karte h iske liy alg syntex use karte h jo ki JSON ka method h

  JSON.parse(JSON.stringfy(object))

const obj1 = {a: 1, {c: 2}};
const obj2 = JSON.parse(JSON.stringify(obj1));

object2.a = 4
object2.c = 5
console.log(object1)//{a: 1, {c: 2}}
console.log(object2)//{a: 4, {c: 5}}

```

### Question 9. What is scope chain ? Explain all type of scopes with example.

```
Scope Chain -  javascript scope chain se jo bhi code likha huwa h usko puri
trh check krta h.Variables,functions. jese ki koi bhi varible h usko pehle local block
scope m check karegi bad m function scope m or bad m globle scope m check karegi. agr
varible find ho jata h to result de dega nhi to refrenece error dega. isi method ko scope
chain kehte h y 3 type k hote h

1. Globle Scope
2. Functional Scope
3. Block Scope


1. Globle Scope - koi veribles jo starting m code karte h wo sbhi veriables
 Globle Scope m aate h. or jo bhi veriables globle scope m hote h unko easilye
  access kiya ja skta h.

let a = 2

function test(
    return a
)
test()
result : 2// function m a declear nhi kiya h to a wo globle scope se le lega
 or a ki value return kar dega


2. Functional Scope : isme jo bhi veriables  function k ander declare karte h
.wo sabhi function scope m aate h .



function main_function() {

        // Variable with Function Scope...
        var a = 2;

        // Nested Function having Function Scope
        var multiply = function () {

            // It can be accessed and altered as well
            console.log(a * 5);
        }
        multiply();
    }

result : 10


3. Block Scope - iska mtlb koi bhi verible jo ki block scope m ho means {}.

jo bhi veriables block m hoga to first block scope ki value return karega

{
    let x = 10

    console.log(x)// 10
}
console.log(x)// Error x is not defined
```

### Question 10. What is JIT? Explain

```
JIT- JIT means Just In Time. jo bhi code ko apn run karte h to interprter line
 to line code ko check karte h or usi time code excute bhi karte h means jo
  bhi code hoga usko run time m hi code ko machine code m convert kar k excute
   karna isko hi hum JIT kehte h. y JIT compiler or interprter ka combination
    h.


function arrayConcat(arr) {
  var result = "";

  for(let i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result;
}

console.log(arrayConcat([1,2,3,4,5])) //12345

```
