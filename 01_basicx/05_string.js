const name = "hitesh"
const repocount = 50
//console.log(name+ repocount +"value"); it is a wrong tarika outdated hai
console.log(`hello my naem is ${name} and my repo count is ${repocount}`);   //sahi tarika string interpolation boltey
const gamename = new String('hiteshhc') //hai ye bhi string type hi but key value apir main bhi return karega
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));    //original saved hai usme kuch bhi change nahi hua hai islye jo hua hai copy main change hau ahi
//or bhi bhot sara functions hai
//mdn docts main string related functions 
const newstring = gamename.substring(0, 4)
console.log(newstring);
const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);

const newstringone = "   hitesh.   "
console.log(newstringone);
console.log(newstringone.trim());
const url = "httsps..//adarsh.com/adaay%20raj"
console.log(url.replace('%20', '-'))
console.log(url.includes('adarsh'))
console.log(gamename.split('-'));




