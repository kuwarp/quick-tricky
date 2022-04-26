// print the Sum of Any two numbers without using Arithmatic operator.

// var getSum = function(a, b) {
//     if (b == 0) {
//         return a;
//     } else {
//         return getSum(a ^ b, (a & b) << 1)
//     }
// };
// console.log(getSum(3,4));

let getSum=(a,b)=>{
 return   b?getSum(a^b,(a&b)<<1):a;
}
const result= getSum(4,6)
console.log(result);