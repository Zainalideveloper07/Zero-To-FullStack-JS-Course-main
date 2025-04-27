// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

// function greet(name ,callback){
//     console.log(`Hello  ${name}`);
//     callback();
    
// };

// function sayGoodBye(){
//     console.log("Goodbye");
    
// };

// greet("Zain",sayGoodBye);


function doMath(x,y,Callback){
    return Callback(x,y);
}

function add(x,y){
    console.log(x+y);
}

function sub(x,y){
    console.log(x-y);
}

function devied(x,y){
    console.log(x/y);
}

function Multiply(x,y){
    console.log(x*y);
}
console.log("Multiply");

doMath(5,2,Multiply);
doMath(2,22,Multiply);
doMath(5,2,Multiply);
console.log("add");
doMath(5,2,add);
doMath(2,22,add);
doMath(5,2,add);
console.log("devied");
doMath(5,2,devied);
doMath(2,22,devied);
doMath(5,2,devied); 






// function fn(){
//   console.log(value);
// }
 

// function showCallFun(fn) {
//   const value =10;
//   fn(value);
// };
// showCallFun();

// function fn(){
//   console.log(value);
// }
 
// showCallFun(fn());

// function showCallFunc(fn) {
//   const value = 10;
//   fn(value);
// }

// showCallFunc(function (value) {
//   console.log(value);
// });


//setTimeOut

// setTimeout(() => {
//   console.log("hello world 1");
  
// },0);

// console.log("Hello world 2");



// const loedfunction=(src,callback)=>{


// }