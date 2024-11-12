// // 1
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(person);
// // 2
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// console.log(person.name); 
// console.log(person.city); 
// // 3
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };

// const { name, age } = person;
// console.log(name); 
// console.log(age);  
// //4
// const student = {
//     name: "Alice",
//     age: 22,
//     address: {
//         city: "San Francisco",
//         country: "USA"
//     }
// };

// const { address: { city, country } } = student;
// console.log(city);
// console.log(country);
// //5
// const product = {
//     name: "Laptop",
//     price: 1200
// };

// const product = {
//     name: "Laptop",
//     price: 1200
// };

// const { name: productName, category = "general" } = product;
// console.log(productName);
// console.log(category);
// console.log(name);
// console.log(category);
// //6
// function displayCar({ brand, model, year }) {
//     console.log(brand);
//     console.log(model);
//     console.log(year);
// }

// displayCar({ brand: "Toyota", model: "Corolla", year: 2020 });
// //7 
// const book = {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     year: 1925,
//     publisher: "Scribner"
// };

// const { year, publisher, ...rest } = book;
// console.log(rest);
// //8
// const user = {
//     name: "David",
//     age: 28
// };

// const location = {
//     city: "Boston",
//     country: "USA"
// };

// const mergedObject = { ...user, ...location };
// console.log(mergedObject);
// //9
// function sumNumbers(...numbers) {
//     return numbers.reduce((sum, number) => sum + number, 0);
// }

// console.log(sumNumbers(1, 2, 3, 4));
// //10
// const numbers1 = [1, 2, 3];
// const numbers2 = [4, 5, 6];

// const combinedArray = [...numbers1, ...numbers2];
// console.log(combinedArray);