//array hamesha hallow copies banata hai .shallow copy of an object is acopy whose [properties share the same refrences as those of source object from which the copy has made]
//while a deeep copy of an object is a copy whise properties do not share teb samAE REFRENCES
const myarr =[0,1,2,3,4,5]
const myheros=["shaktiman", "naagraj"]
const myarr2 = new Array(1,2,3,4)
//console.log(myarr[0]);
//array methods//
/*myarr.push(6)
myarr.push(11)
myarr.pop()
myarr.unshift(0);//0 ki jagah kuch bhi ho sakta ahi startmain value dal jata hai but method bekar hai recommend nahi kartey
myarr.shift()*/

//console.log(myarr.includes(9));
//console.log(myarr.indexOf(4));
//console.log(myarr);
//const newarr= myarr.join()//arrays ko join kardegq ek main but string type abnjayega
//console.log(myarr);
//console.log(typeof newarr);

//slice, splice //splice retunrn section of array
//console.log("A ", myarr);
//const myn1 = myarr.slice(1,3)
/*console.log(myn1);//splice main last range include nahi hoti hai jabki splice main last range bhi include hoti hai
console.log("B ", myarr);
const myn2= myarr.splice(1, 3)//splce main original array bhi manipulate ho jati hai jabki slice main nahi hotra check the r3esults
console.log("c ", myarr);
console.log(myn2);
*/
//const marvel_heroes = ["thor", "Ironman", "spiderman"]
//const dc_heroes=["superman", "flash", "batman"]
//marvel_heroes.push(dc_heroes)//merge nahi gogar array ke andar array hogya hai kisi bhi typpe a entry data le lete hai

//console.log(marvel_heroes);
//for aceesing value of flash 
//console.log(marvel_heroes[3][1]);//but  ye tarika accha nahi hai
//const allheroes = marvel_heroes.concat(dc_heroes)//new arrays chaiye that
//console.log(allheroes);
//next method to all all spread operator kakch ka gilas bkhar do
//const allheroes2 = [...marvel_heroes, ...dc_heroes]
//console.log(allheroes2);

//const another_array= [1,2,3,[4,2,3],5,6,[8,9,0,[1,2,34]]]
//const realnaotherarry = another_array.flat(Infinity)//kitna depth dena hai 1,2 infinite, solve goga phir flat ko use kartey hai sare array ko ek sathn dene ke liye
//console.log(realnaotherarry);
//console.log(Array.isArray("adarsh"));
//convert kaise karna hai array main
//console.log(Array.from("adarsh"));//objects aur strings bhi de skatey ho
//console.log(Array.from({name: "hitesh"})) // intersrting it demand sopecificness khali[] return karega
/*let score1=100
let score2=140
let score3=107
console.log(Array.of(score1,score2, score3));//ye bhi ek tarika hai raaray ko. convert karne kaz\
*/
