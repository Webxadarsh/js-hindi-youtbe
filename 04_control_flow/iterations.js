//for of loop
/*
const arr= [1, 2, 3, 4, 5]
for (const num of arr) {
   // console.log(num);
    
}

const greetings = "hello world"

for (const greet of greetings) {
   // console.log(greet);
    
}

//maps array jaise hi hotey hai c++ main jese hotey hai waise hi hotey hai key value pair unique value hoti hai
//maps iterable ni hotey hai hota bhi hai to dusre tarikey hai
const map = new Map()
map.set('in', "india")
map.set('us', "united states")
map.set('uk', "united kingdom") */

//console.log(map);//how to add loop in map
//for (const [key, value] of map) {
    //console.log(key, "->", value);
    
//}
//object pe kaise lagaye for loop
//const myobject = {
  // game1 : 'Nfs',
   //game2 : 'spieramn'
//}

//for (const [key, value] of myobject){
  // console.log(key, ':-', value);
   
//} objects aise print nahi  hotey hai
//ais ekartey hai
//for in loop objects ke liye use karey
//for (const key in myobject) {
   //console.log(`${key} shortuct is for ${myobject[key]}`);   //is chiz main key aur myobject[key] ko alag a;ag print karke dekh le kya kya aayega but aayega to forin loop se hi

   //aayeiie array pe ekhtey hai
 //  const programming = ["js", "rb", "py", "java", "cpp"]
  // for (const key in programming) {
//console.log(programming[key]);

 //  }
   

//}




//##########for each loop////
const programming = ["js", "rb", "py", "java", "cpp"]
//programming.forEach(function(kuchbhivaluelelo) {
  // console.log(kuchbhivaluelelo);
//});
//ek aur tarika dekh le

//programming.forEach((item) => {
  // console.log(item);
   
//})

//ek aur dakh le
/*
function printit(item){
   console.log(item);
   
}

//programming.forEach(printit)


programming.forEach((item, index, arr)=> {
   console.log(item, index, arr);
   
})
*/

const mycoding = [
   {
      languagename : "javscript",
      languagefilename: "js"
   },
   {
      languagename : "java",
      languagefilename: "java"
   },
   {
      languagename : "python",
      languagefilename: "py"
   },
]

mycoding.forEach((item) => {

   console.log(item.languagename, item.languagefilename);
})






