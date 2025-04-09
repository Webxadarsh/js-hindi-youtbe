//isme start karety hai reduce se
const mynums = [1,2,3]
//const mytotal = mynums.reduce(function(accumulator, current_value){
  //  console.log(`acc: ${accumulator} and curval ${current_value}`);
    
    //return accumulator + current_value
//}, 0)

//console.log(mytotal);

const mytotal = mynums.reduce((accumulator, current_value) => accumulator + current_value, 0)//baat wahi same hai uapr wale code ki tarah
//console.log(mytotal);

const shopping_cart = [
    {
        itemname: "c++",
        price: 2909

    },
    { itemname: "java",
        price: 299

    },
    {
         itemname: "python",
        price: 1999
    },
    {
         itemname: "data science",
        price: 7789
    },
]

const pricepay = shopping_cart.reduce((acc, item) => acc + item.price, 0)
console.log(pricepay)

