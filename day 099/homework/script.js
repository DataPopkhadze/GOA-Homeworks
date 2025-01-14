// N1 
const greet = (saxeli = 'მაყურებელი') => console.log(`Hello, ${saxeli}!`);

// N2
const twoSum = (a = 5, b = 0) => console.log(a + b);

// N3

const biggerThanTheOtherOne = (a = 10, b = 20) => {
    if (a > b) {
        console.log(a);
    } 
    
    else {
        console.log(b);
    }
};
