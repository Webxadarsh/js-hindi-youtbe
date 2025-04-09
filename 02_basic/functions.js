/*function saymynME(){
    console.log("A");
    console.log("DARSH");
    
    
}
//saymynME();
function add2numbers(num1,num2){       //parameters num1 and num2
    console.log(num1+num2);
}
//add2numbers(10,20); //arguments 10 and 20 jab bhi function call hota hai toh arguments pass karte hai

function addtwonumbers(num1,num2){
    return num1+num2;
;
}
const result=addtwonumbers(5,20);
console.log("result is "+result); //undefined because function is not returning anything

function loginusermessage(username){
    if(username === undefined){     //ya fir if(!username) ho sakta hai same kaam karega
        console.log("Please provide username");
    return `Welcome ${username}`;
}
//loginusermessage("Darsh"); //execute hoga but print nahi hoga
console.log(loginusermessage("Darsh")); //execute hoga and print hoga
//innjavascript empty strings ko false consider karta hai and undefined ko bhi false consider karta hai /*/

//... ko rest operator kehte hai aur spread operator bhi kehte hai
function calculatecartprice(val1, val2, ...num1){
return num1
}

//console.log((calculatecartprice(200, 400, 500, 2000))); //output will be 500,2000 
//200,400 is val1 and val2 and 500,2000 is num1

//@@@@@@@@ functions ko objects ke andat kaise paas karein hain niche 

/*const user = {
    username: "hitesh",
    price: 199
}
function handleobjects(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleobjects(user); //output will be username is hitesh and price is 199
handleObject({
    username: "darsh",
    price: 200
})
//aise upar direct object pass kar sakte hai */
const mynewaaray = [200,300,400,600]
function return2value(getArray){
    return getArray[1];
}
console.log(return2value(mynewaaray)); //output will be 300

