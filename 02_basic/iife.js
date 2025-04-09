//iife - immediately invoked function expression

//global scope se koi bhi interaction ni chyev to bana alag scope aban letey hai'//global scope main kafi bvafraibales hotey hai vaha ke pollution se bachne ke liye 

//immedialtely excetue karne ke lite

(
    function chai() {console.log('db connected')}
)(); //semicolon lagana jaruroi haio
//ye function immediately execute ho gaya
( (name) => {
    console.log(`db connected ${name}`)
})('hitesh')

//dhyam rakhna do iife function likhogey to yaad se dssemicolon laga lena kyuki exescute nahihaoga


