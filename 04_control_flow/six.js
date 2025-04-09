/*const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach((item) =>
{
    console.log(item); // dhyan rakho idhr print to ho jayega upar wala sab but undefined return karega islye manually niche return karrey hai
    return item
})
console.log(values);
//kya hua phir dobara undeffined retunr kaara hai kyuki for each undefined return karta haimatlab return hi nin karta hai dhyan rakhna


const mynums =  [1,2,3,4,5,6,7,8]
//const newnums = mynums.filter((num) => num >4) //filyter yahape return karta hai unlike foreach //ek tarika neche hai
const newnums = mynums.filter((num)=>{
    return num>4 // scope lag gya hai islye return karan apad raha ahi nahi to jhaat koi jarurata nahi thee retrurn karne lki
})

console.log(newnums);
*/

//agar for each se karna ho to

const mynums =  [1,2,3,4,5,6,7,8]
 const newnums = []
 mynums.forEach((num) => {
    if(num>4){
        newnums.push(num)
    }
 })
 console.log(newnums);
 


