//same filter ki trh kahani hai

const mynumbers = [1,2,3,4,56,7,8,9]
//const newnums = mynumbers.map((num)=> num+10)
const newnums = mynumbers
                .map((num) => num*10)
                .map((num) => num + 1)
                .filter((num) => num>= 40)





console.log(newnums);
//chaining usko boltye hai jisme 2-3 methods laagataer ude akrtey hai jaise //map.map.filter sab kuch ho sakta hai
