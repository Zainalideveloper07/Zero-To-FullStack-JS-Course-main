// 1. Create a function name (showCallFunc)
// 2. pass "fn" as parameter
// 3. inside that function, create variable which holds value of 10
// 4. pass that value to the callback function
// 5. Now create callback function & print that value which you pass as parameter to the callback func.

function fn(){
  console.log(value);
}
 

function showCallFun(fn) {
  const value =10;
  fn(value);
};
showCallFun();

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