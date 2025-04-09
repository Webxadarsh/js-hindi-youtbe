
var c=300
let a=200
if (true) {
    let a=10
    const b=20
    var c=30 // c=30 likhne pe bhi yahi hoga
}//kul milake scope ke andar ki value bahar nahi jana chahaiye
//console.log (c) // isme na a print hoga na b but c print hoga kyuki var scope se bahar hai islye var ko bad practice kehtey hai
//block scope aur global scope padh lena

//browser ke andar inspect console main alag hai....aur core  environment ai m node ki taraha jab terminal se console use kartey haio vo alag hai



//@@@nested scope
function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username);
    
    }
    //console.log(website);
   // two()
}
//nested function main child function parents ko acess kar skatey h but parents child ko access nahi kar sakta kyuki unka scope pehle hi khatam hojata hai

//one()


/////////+++++++++ interresting concept///////

//function can be made nn diffrent way
addone(5)
function addone(num){
    return num+1
}
//i starah se function initialixze karengey to upar se bhi cakll kar saktey hai matlab scope upar tak ja sakta hai
 //lekin wahi niche ka example lo


 addtwo(5)
 const addtwo = function(num){
    return num+2
} //ye e tarika hai function bananey ka jisme variable main store karrey hai
//yaha error aayega kyuki const addtwo ko upar se call nahi kar saktey hai kyuki const ho chuka hai aur uska scope sirf niche tak hai
//agar upar se call karna hai to upar se hi initialize karna hoga
//isiko hoisting kehte hai
//addtwo(5) niche aayega..




