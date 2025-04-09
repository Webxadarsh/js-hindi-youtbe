// var global scope ban jata ha dikkat hai
const balance = 1000

//for case if case switch case ye sab same hia c++ ki taarah
//falsy values are
//false, 0, "", null, undefined, NaN, -0. BigInt(0) 0n,
//else all re truthy values
//some examples are : "0" (string ke andar 0 ho to 0),'false' ye bhi truthy hai, " " space hai to bhji,
//function(){} ye bhi hota hai


//if. (useremail.length === 0){
//    console.log("array is empty")
//}


//to check objects is empty or not
//const emptyobj = {}
//if(Object.keys(emptyobj).length === 0){
//    console.log("object is empty")
//}



//nullish coalescing operator(??): null  undefined           null  ya undefined ko check karta hai
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 10
//val1 = null ?? 10 ?? 20.  10 answer dega kyuki jo pehele milega wahi milega null ke baad
//console.log(val1);

//ek bata aur ternary operator diffrent hai nullish  coalescing operator s


//ternary operOR
//ISME HOTA HAI CONDITION ? true : false is tarike ka
const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80") : console.log("greater than 80") // ye ternary operator hai


