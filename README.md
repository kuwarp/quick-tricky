# quick-tricky
just tricky Programming Concepts


> 1. <h2>print  nmbr from given number to the given range of the number using while loop.

 ```
 let a=5;
let b=8;

while(b--){
    a++
    console.log(a);  
     
}


 ```

 >2. <h2>Some any two number without using arithmatic operator.
  
```Ruby
var getSum = function(a, b) {
     if (b == 0) {
         return a;
     } else {
         return getSum(a ^ b, (a & b) << 1)
     }
 };
 console.log(getSum(3,4));
```

 <h1>                              OR </h1>
   
```Ruby
let getSum=(a,b)=>{
 return   b?getSum(a^b,(a&b)<<1):a;
}
const result= getSum(4,6)
console.log(result);
```
