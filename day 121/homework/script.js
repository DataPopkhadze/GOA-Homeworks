// 1

function hello() {
    window.alert('hello')
}

setTimeout(hello, 2000)

// 2

function message (message, callback) {
    setTimeout(function(){
        console.log(message);
        callback();
    }, 2000);
}

// 3

function delayedSquare(numbers, callback) {
    let squaredNumbers = [];
    let count = 0;

    numbers.forEach((num, index) => {
        setTimeout(() => {
            squaredNumbers[index] = num * num;
            count++;

            if (count === numbers.length) {
                callback(squaredNumbers);
            }
        }, Math.random() * 1000); 
    });
}

// 4

// ???

// 5
function interactiveMessage() {
    let name = window.alert('შეიყვანეთ თქვენი სახელი <3')
    setTimeout(() => {
        window.alert(`მადლობა ${name} დახმარებისათვის!`)
    }, 3000);
}
წ