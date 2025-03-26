// const tinderuser = new Objedt()
const tinderuser = {}
tinderuser.id= "abc1123"
tinderuser.name = "sammy"
tinderuser.isloggedin = false
//console.log(tinderuser);
const regularuser ={
    email: "anc@qbc.com",
    fullname:{ 
        userfullname: {
            firstname: "hitesh",
            lastname: "addy"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)
//console.log(regularuser.fullname?.userfullname.firstname) //api agar5 full name missing hai to
const obj1 ={
    1:"a", 2: "b"
}
const obj2 ={
    3:"a", 4: "b"
}
//how to combine these obj3ects
//const obj3= {obj1, obj2}.  isko islye use nahi karengey kyyki object wali problem aayegi
//const obj3 = Object.assign(obj1, obj2) // ek aur tarika hai s bracket se pehle andar 1st element  ye --> {} add karo kyuki ye khali array add karri hai nahi to sari values onj1 main jari hai
const obj3 = {
    ...obj1,
    ...obj2
}
//console.log(obj3);


const users = [
    {
        id: 1,
        email : "abcbsdsdcvdsc@gmail"
    },
    {
        id: 2,
        email : "cvsvcsugcbx7sy@gmail"
    }

]
users[1].email
//console.log(tinderuser);
//database se direct array of objects aata hai
//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));
//sab kuch array main bana diya jayegaq
//console.log(Object.entries(tinderuser));
//console.log(tinderuser.hasOwnProperty("isloggedin"));

//destructuring
const course = {
    courseName: "JS hifni",
    courseinstructur: "hitesh",
    price: 99
}
//course.courseinstructur  ek tarika ye hai lekin baar baar karne main aafat aa jayega
const {courseName, courseinstructur: instructor, price} = course //instructor iused heere for short name of courseinstructur
//console.log(instructor);

//API KI VALUES PEHELE XML M AATA THA AB JSON M AATA HAI

{
    name: "hitesh",
    courseName: "js in hindi", //json main keys bhi string hoti hain aur values bhi
    price: "free"
}


