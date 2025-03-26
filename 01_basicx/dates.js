let mydate= new Date()
console.log(mydate.toDateString());
//console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toISOString());
console.log(typeof mydate); //date ek object hai
let mydate1= new Date(2023, 0, 23, 5, 3)// date(01-14-2014) bhi likh saktey ho
console.log(mydate1.toLocaleDateString());
let mytimestampb = Date.now()
console.log(mytimestampb);
console.log(mydate1.getTime()); //milliseconds main dega
console.log(Math.floor(Date.now()/1000))//seconds main dega
let newdate= new Date()
console.log(newdate);
console.log(newdate.getFullYear());//simloaril get day hours sab kuchj mil jata hai month vaherah bhi
console.log(newdate.getMonth()+1)//isme kyuki month javascript main 0 se start hotey haai
// string inetrpoltion main bhi ye upar wlae methods direct us kar saktey hai like '${newdate.getDay()} and the time'
newdate.toLocaleDateString('default', {weekday: "long"})// iske agay date timezone etc sab add kar skatey hai



