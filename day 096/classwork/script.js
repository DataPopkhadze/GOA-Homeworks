

// const arr = [1,2,3,4,5,6,7,8,9]

// const sum = arr.reduce((acc, cur) => {
//     return acc + cur
// });

// console.log(sum);



const arr = [1,2,3,4,5,6,7];

if (arr % 2 === 0) {
    const newArr = arr.map(arr => arr * 2);
    console.log(newArr);
}

else if (arr % 2 !== 0) {
    console.log(arr)
}