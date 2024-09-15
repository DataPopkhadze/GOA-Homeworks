// // // პირველი მაგალითი
// // const numbers = [1, 2, 3, 4, 5];
// // numbers.forEach(function(number) {
// //   console.log(number * 2);
// // });

// // // მეორე მაგალითი
// // const users = [
// //     { name: 'data', age: 13 },
// //     { name: 'nensi', age: 3 },
// //     { name: 'tatuli', age: 5 }
// //   ];
// //   users.forEach(function(user) {
// //     console.log(user.name);
// //   });

// // // manualForEach-ის შექმნა
// // function manualForEach(arr, callback){
// //     for(let i = 0; i < arr.length; i++){
// //         callback(arr[i]);
// //     }
// // }


// // // შექმენით მასივი სადაც გექნებათ მინიმუმ 5 სახელი, გამოიყენეთ map მეთოდი და შეამოწმეთ შემდეგი პირობა, თუ ინდექსი არის ლუწი მაშინ ახალ მასივში სახელი დაამატეთ დიდი ასოებით სხვა შემთხვევაში თუ კენტია დაამატეთ პატარა ასოებით
// // arr = ['data', 'luka', 'nino', 'nensi', 'tatuli'];

// // const newArr = arr.map(function(element, index) {
// //   if (index % 2 === 0) {
// //       return element.toUpperCase();
// //   } else {
// //       return element.toLowerCase();
// //   }
// // });

// // console.log(newArr);


// // // forEach ელემენტი მხოლოდ მასივის თითო ელემენტზე ასრულებს ფუნქციას და მას ყოველ ჯერზე არ გამოაქვს ახალი მასივი, map-ს კი ყოველჯერზე ახალი მასივი გამოაქვს და ფუნქციას მასივის ყველა ელემენტზე ასრულებს

// // // manualMap ვერ გავაკეთე :((


// // const people = [
// //   { name: "Ana", age: 20 },
// //   { name: "Giorgi", age: 17 },
// //   { name: "Nino", age: 25 },
// //   { name: "Dato", age: 15 },
// //   { name: "Mariami", age: 18 }
// // ];

// // const adults = people.filter(person => person.age >= 18);
// // const minors = people.filter(person => person.age < 18);

// // console.log("18+ ასაკის ადამიანები:", adults);
// // console.log("18-ზე ნაკლები ასაკის ადამიანები:", minors);

// // // manualFilter ვერ გავაკეთე :((

// // // filter მეთოდი ქმნის ახალ მასივს სადაც არის გადაცემული ფუნქცია true, map ორიგინალ მასივს არ ცვლის და აბრუნებს ახალ ელემენტებს~





// // Create an array of numbers. Use map() to return a new array where each number is doubled.

// let array = [1, 2, 3, 4, 5, 6, 7, 8]

//   const newArr = array.map(function(arr) {
//     return arr * 2;
//   });

//   console.log(newArr); 


// // Given an array of numbers, use filter() to return a new array containing only the even numbers.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);


// // Create an array of numbers. Use map() to return a new array where each number is squared

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const squaredNumbers = nums.map(function(number) {
//   return number ** 2;
// });

// console.log(squaredNumbers);


// // Create an array of names. Use filter() to return a new array of names longer than 5 characters.

// let names = ['data', 'luka', 'nino', 'zviadi', 'nensi', 'tatuli']

// const longNames = names.filter(name => name.length > 5)

// console.log(longNames);

// // Create an array of strings. Use map() to return a new array where the first letter of each string is capitalized.

// let strings = ['hello', 'world', 'hi', 'earth', 'planet']

// const capitalizedStrings = strings.map(string => string.charAt(0).toUpperCase())

// console.log(capitalizedStrings); //ეს კოდი არ მუშაობს


// // Given an array of numbers, use forEach() to iterate through the array and find the sum of all numbers.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// num.forEach(number => {
//   sum += number;
// });

// console.log(sum);

// // Create an array of words. Use filter() to return a new array containing only words that are longer than 3 characters.

// let words = ['apple', 'banana', 'cherry', 'lemon', 'strawberry', 'watermelon']

// const longWords = words.filter(word => word.length > 3)

// console.log(longWords);

// // Create an array of words. Use map() to add the prefix "super" to each word and return a new array

// let superWords = ['apple', 'banana', 'cherry', 'lemon', 'strawberry', 'watermelon']

// const prefixedWords = superWords.map(word => `super${word}`)

// console.log(prefixedWords);

// // Given an array of numbers, use filter() to return a new array containing only the odd numbers.

// let integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const oddNumbers = nums.filter(number => number % 2 != 0)

// console.log(oddNumbers);

// // Create an array of numbers. Use forEach() to log each element of the array to the console.'

// let integerebi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// integerebi.forEach(number => console.log(number));

// const names = ["Luka", "Lile", "Nia", "wfsdf"];

// const newNames = names.filter((curValue) => {
//     return curValue.length >= 4
// })

// console.log(newNames)

// const manualFilter = (arr, func) => {
//     const result = [];
    
//     for(let i = 0; i < arr.length; i++){
//         const bool = func(arr[i], i, arr);
        
//         if(bool) {
//             result.push(arr[i])
//         }
//     }
    
//     return result;
// }

// console.log(manualFilter(names, (curValue) => {
//     return curValue[0] != "L"
// }))

// const names = ["Luka", "Lile", "Nia"];

// const newNames = names.map((curName, index, arr) => {
//   return curName + ")fwefwef"
// })


// const manualMap = (arr, func) => {
//   const result = [];
  
//   for(let i = 0; i < arr.length; i++){
//       const value = func(arr[i], i, arr);
//       result.push(value)
//   }
  
//   return result;
// }

// console.log(manualMap(names, (curValue, index) => curValue + index))

// const names = ["Luka", "Lile", "Nia"];

// const manualForEach = (arr, func) => {
//   for(let i = 0; i < arr.length; i++){
//       func(arr[i], i, arr)
//   }
// }

// manualForEach(names, (value) => {
//   console.log(value)
// })
