// N1
const numbers = [10, 20, 30];
const [a, b, c] = numbers; 

// N2
const user = { name: "Alice", age: 25 };
const { name, age } = user;

// N3

const person = { firstName: "John", lastName: "Doe" };
const { firstName: fName, lastName: lName } = person;

// N4
const colors = ["red", "green", "blue", "yellow"];
const [third, , fourth] = colors;

// N5
const students = [
    { name: "Anna", score: 90 },
    { name: "Bob", score: 85 }
  ];
  
  for (const { name, score } of students) {
    console.log(`${name}: ${score}`);
  }
  
// N6
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second); // 1 2

// N7
const numbersArray = [1, 2, 3, 4, 5];
const [firstNum, , , , lastNum] = numbersArray;

// N8
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 50 }
  ];
  
  const expensiveProducts = products.filter(({ price }) => price > 50);
  console.log(expensiveProducts); 

// N9

const mixedArray = [42, { mane: "Alice", bage: 30 }, "hello"];
const [, { mane, bage }] = mixedArray;

// N10
function manualDestructing(obj) {
    let result = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result.push(obj[key]);
      }
    }
    return result;
  }
  
  // Example usage:
  const sampleObj = { a: 1, b: 2, c: 3 };
  console.log(manualDestructing(sampleObj));
  

  
