const user = {
    username: "hitesh",
    price: 199,
    welcomemessage: function(){
        console.log(`welcome ${this.username} to the course at price ${this.price}`);
        console.log(this);
        
    }

}
//this keyword use kartey hai current context ke liye //arrow function ke andar this nahi hota hai
//user.welcomemessage() //this is the current context
//user.username = "naddy"
//user.welcomemessage() //this is the current context


//console.log(this);  //empty hoga kyuki ye node ke andar hai...//but browseer ke andar window object hoga jo ki global object hai
/*function chai(){
    let username= "hitesh"
    console.log(this.username); //undefined hoga kyuki ye chai function ke andar hai
}
chai() */

const chai= () =>{
    let username= "hitesh"
    console.log(this); 
}
//chai() 

//const addtwo = (num1, num2) => {
//     return num1+num2 //explicit return hai
//}
//const addtwo = (num1, num2) => num1+num2 //arrow function implicit return hora hai return type nahi likhna pad raha hai
//console.log(addtwo(5, 6)); //11 aara hai aaram se run ho raha hai
//ek aur baat iska mtalab hai ki vcurly baraces agar use hoga to return keyword use karna padega lekin wahi agar simple bracket hota to nahi hoga

//const addtwo = (num1, num2) => {username: "hitesh"}

//lets return object usme hamesha usko parenthesis yani curly braces ke andar rakhna padega
const addtwo = (num1, num2) => ({username: "hitesh"})
console.log(addtwo(5, 6)); 
