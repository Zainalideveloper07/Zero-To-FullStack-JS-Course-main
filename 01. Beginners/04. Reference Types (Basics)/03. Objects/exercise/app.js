// 1. Create object name (car)
let car={};
// 2. add (type, model, color) as properties
car ={
type:"",
model:"",
color:""
};
// 3. check the type of object
console.log(typeof car);
// 4. Update the type property to "Toyota"
car.type="Toyota";
// 5. Add new property wheels
car.wheele=4;
// 6. log car to the console.
console.log(car);

// const car = { type: "Fiat", model: "500", color: "white" };

// // Accessing Properties
// console.log(typeof car);

// // Updating Properties
// console.log(car.type);
// console.log((car.type = "Toyota"));

// // Add new properties
// console.log((car.wheels = 4));
// console.log(car);
delete car.wheele;
console.log(car);

