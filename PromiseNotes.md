### CallBack

```
Javascript m callback means koi bhi function first() ko baneynge. to first() function m jab koi dusra function call karenge to wo callback process m aayega. mostly hum isko isliy kam m lete h ki jab hum koi kam kar rh to uske sath hum call back ki help se dusra code bhi daal ske or jese hi first() ka code complete hoga to jo callback function use kiya h wo function bhi excute ho jayega. or hume wait nhi karna padega.
or Callback functions ki jarurt hume isliy bhi hoti h kyuki javascript k action mostly asynchronous hote h.
isliy isko jab koi promise m API ko hit karwate h ya promise k success ya reject pr koi dusra function call krenge wo callback functions honge.
```

```
  const newUser = new Promise((resolve, reject) => {
    if (user) {
      resolve(user)
    } else {
      reject(new Error('No more new users!'))
    }
  })

  newUser.then(function(){
    console.log("Hello 1")
  }).then(function(){
    console.log("Hello 2")
  }).then(function(){
    console.log("Hello 3")
  }).then(function(){
    console.log("Hello 4")
  }).then(function(){
    console.log("Hello 5")
  })
```

### AJAX

```
Ajax  means Asynchronous JavaScript and XML
JavaScript ka use se hum web page ko dynamic banane ke liye kiya jata h.Ajax bhi javascript ka process h jo ki kisi bhi HTML CSS web page ko dynaemic banata h jese ki jab bhi hum koi web page open karte h or koi bhi input box m name ya details mssage likhte h to usme Ajax k use se us web page ko bina refresh kiye hi data us page pr upload kar skte h.or hume wait ya koi refres krne ki jarurat nhi h.
```

### XMLHttpRequest

```
XMLHttpRequest y ek Ajax ka hi part h jo web page ko dynemic bnata h. y ek javascript object h.iski helps se server ki taraf se data lena or bhejne ka kam karta h.
isme ek XMLHttpRequest ka object bnate h or usme API ki help se data lete h or ek function call karenge or send()  function se data aage server ko bhej deta h or web page pr response show ho jata h.
```

```
const httpRequest = new XMLHttpRequest();
httpRequest.open("GET", "https://restcountries.com/v3.1/name/india");
httpRequest.send();
httpRequest.onload = function () {
  console.log(this.responseText);
};
```

### What is an API ?

```
API - Application Programming Interface
apn iske name se hi smj skte h y programme ko interface karne k liy karte h.aasan language se smje to ek data server h us se hume koi information chahiye to hum uski API key ki help se user ko wo data de skte h.
for Example : jab hum koi bhi train ka ticket book karte h to hum railway station na jakr kisi bhi application se train ka ticket book karte h jese ixigo,paytm etc to isme y jo applictions h wo sirf railway ki API KEY ko use krte h or waha se data fetch karta h or us se hume train ka ticket book kar k deta h.
```

```
const prom = fetch("https://irctc1.p.rapidapi.com/api/v1/searchStation?query=BJU");
prom.then(function (res) {
  res.json().then(function (result) {
    console.log(result);
  });
});//error h isme
```

### How the web works

```
Web ko chlane ya show karne k liy client server programming ki jarurat hoti h. or client server ka code jab user k browser m run karte h to wo code ki help se browser pr file image show ho jati h y sab code HTML CSS or Javscript ki help se hota h jo ki web page ko acha dikhane or style k liy use hoti h.y sab ek process se hota h client server se code broswer URL se server ko request bhejta h or response m HTML CSS or javascript ki file bhejta h. or y sabhi file ek dusre se link hoti h. web page pr jo kuch bhi show hota h wo sab code HTML CSS or javascript se hota h. or javascript web page ko interctive bnata h mtlb kisi box button pr click karne pr color change hona ya next page pr jana etc.
```

```
<html>
<head>
    <title>Assignment-05</title>//web page ka tittle
</head>
<link rel="stylesheet" href="styles.css">
<body>
    <h1>Assignment-05</h1>
    <div id="country"></div>
    <script src="promfatch.js"></script>
</body>
</html>
y html ka code h jisme javascript ki file link h script tag se
or  css ki file link ki h link tag se
```

## Server

```
Server computer program hai jo internet ki help se  chalta hai aur client ko data provide karta hai. JavaScript mein bhi server-side programming use  ki ja sakti hai. Server-side programming ke liye hume  Node.js ka use krte h.
Nodejs ek server side programming h or open sourse cross platform h
```

## Client

```
iska matlab hai ki humare code ko user ke browser mein execute kiya jaata hai. jis se hum us web page ko interact kar sakte hain.
```

## Request

```
Request se hum kisi bhi server se data ko get karne k liy karte h uske liy http request URL bhjete h jiski help se hum server se data let h.Iske liye hum XMLHttpRequest object ka use krte h.Jab server request ko ache se pura  process kar leta hai, toh woh response send karta hai client ko.
```

## Response

```
Response bhi JavaScript ka object hota hai jo HTTP requests ke response ko represent karta hai. Ye object server se received data, codes ko store karta hai. jab bhi server response bhjta h to us response ko handle karne krne k liy response object ka use karte h or wo information bhejta h jo ki status code ,content type or data hota h. status code m code jo bhi response dega to wo ek code dega jis se hume us respinse ka pta chlega ki jo bhi response mila h wo ok h ya not found h..ok k liy 200 or not found k 404 code aata h. or jo bhi data aata h wo json m aata h
```

```
fetch("https://restcountries.com/v3.1/name/india")
  .then((res) => {
    console.log(res.status);
    return res.json();
  })
  .then((response) => console.log(response))
```

### Promise and Fetch API

```
Promise - promise hum javascript m use karte h. promise ka mtlb hota h wada iska wada y h ki koi bhi API apn n use ki to wo 2 function call karta h jo ki success() or reject() ka...isme kuch bhi ho wo API chlegi to sucess nhi to reject dono m se ek call hoga. jab bhi success wala call hoga to uske liy hum .then() use kar k value ko handle karenge or reject() wala call hoga to .then() k bad .catch() lga kr error ko handle karneg
```

```
let prom = new Promise(function(success,reject)){
    if(true){
       success()
    } else{
        reject()
    }
}
prom.then(function () {
    console.log("Hello");
  })
  .catch(function () {
    console.log("Error");
  });
```

```
Fetch API - y API ko jo client-side se server-side data get karne ke liye use krte h. isko XMLHttpRequest ke syntax se introduce kiya gaya hai. Fetch API promises based hai, jisse hum async operations promisse ko easily handle kar sakte hain.

```

```
const prom = fetch("https://restcountries.com/v3.1/name/india");
prom.then(function (res) {
  res.json().then(function (result) {
    console.log(result);
  });
});
```

### Consuming Promises

```
async operations promisse ko easily handle karta. jab data fetch se API read karta h file se tab ek promise deta h jo ki 3 form hota h ya to pending, fulfilled, or rejected.
jabki Consuming Promises apne promise k result m ya to fulfill karega nhi to reject karega.
Consuming Promises  hone pr .then() se represent karte h.
```

```
const india = fetch("https://restcountries.com/v3.1/name/india");
india
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data[0].capital[0]);

  });
```

### Chaining Promises .then .then .then .catch .catch

```
Jab bhi async operation promise ko handle karte h to usme response ko filter ya usme se jo data chahte h to .then .then .then .then .catch .catch ek chain bn jati h isi ko chaining process kehte h
```

```
const india = fetch("https://restcountries.com/v3.1/name/india");
india
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
  then(function (data) {
    console.log(data[0].capital[0])
  })..catch(function () {
    console.log("Error");
  })
```

### Handling Rejected Promises .catch

```
async operation m jab hum koi promise bnate h to jab bhi reject ya failur ka function call hota h to usme jo bhi error hoti h to us error ko catch karne k liy .catch() bnate h. isme .catch() code ko use is liy bhi karte h kyuki jab koi error .then() m second fuction bna kr de skte h lekin jab second function m bhi error aa jayegi to usko kon show karega uske liy .catch() us krte h
```
