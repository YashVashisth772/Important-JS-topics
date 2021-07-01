//  currying example using .bind()
 let multiply1 = function(x,y){
     console.info( x * y );
 }

let multiplyBy2 = multiply1.bind(this,2);
multiplyBy2(3);
// _____________________________
// here multiplyByTwo() works as:
// let multiplyByTwo = function(y){
//     let x=2;
//     console.log(x*y);
// }____________________________

// _______________________________ 
// currying example using function Closure:

function multiply(x){
    console.info('yash')
    return function(y){
        console.info(x*y);
    }
}
let multiplyByTwo = multiply(2);
let mul2 = multiplyByTwo(5);
// same as below:
// multiply(2)(3);


function sum(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
        }
    }
}
sum(2)(3)(4);
// same as below
// let sum1 = sum(2);
// let sum2 = sum1(3);
// let result = sum2(4);
// console.log(result);














