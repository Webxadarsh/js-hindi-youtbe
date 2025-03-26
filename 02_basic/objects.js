//objects 2 tarah se se define hota hai literal and constructor ki trh
//singleton koi bhi constructor se banatey hai usey kehtey hai object.create karke bantq hqi
//literals se banayegaey to singleton ni baeg
//object literals
const mysym = Symbol("key1")//symbol hai
const jsuser = {
    name: "hitesh",  //keys aur values se access hota hai
age: 24,
[mysym]: "mykey1",               //symbol use karne ka syntaax
location: "jaipur",
email: "abc@abc.com",
isloggedin: false,
lastlogindays: ["monday", "saturday "]
}
//console.log(jsuser.email); //or console.log(jsuser[email])
//console.log(jsuser[mysym]);
//console.log(typeof [jsuser[mysym]]);

//how to cahange value
jsuser.email=  "naddy@daady.com"
//Object.freeze(jsuser)//change ni kar sakta koi
jsuser.email = "naddy@daadykeddy.com"
//console.log(jsuser);
//functons//
//jsuser.greetings = function(){                 //function banaya hai
  //  console.log("hello jsuser");}

//console.log(jsuser.greetings());
//console.log(jsuser.greetings);//function execute nahi hua hai bs return type hai
jsuser.greetingstwo = function(){
    console.log(`hello js user, ${this.name}`); //this same object se print kar6tea hai
}
console.log(jsuser.greetingstwo());



