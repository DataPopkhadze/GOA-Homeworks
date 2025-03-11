// 1
function oneplusone() {
    return new Promise((resolve, reject) => {
        let x = 1 + 3;
        if (x == 3) { 
            resolve("success")
        } 
        else {
            reject("Task 3 failed.")
        }
    });
}

oneplusone().then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});

// 2

function twoplustwo () {
    return new Promise ((resolve, reject) => {
        let a = 2 + 2
        let delay = Math.floor(Math.random() * 4000) + 1000
        setTimeout(() => {
            if (a === 4) {
                resolve('Task 1 complete.')
            }
    
            else {
                reject ('Task 1 failed.')
            }
        }, delay)
    })
}

twoplustwo().then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
});

// 3 

function resolveTwoTimes() {
    return new Promise ((resolve) => {
        let delay1 = Math.random() * 2000 + 1000
        setTimeout(() => {
            resolve('first')
        }, delay1);
    }).then(message => {
        console.log(message)
        return new Promise (
            (resolve) => {
                let delay2 = Math.random() * 2000 + 1000
                setTimeout(() => {
                    resolve('second')
                }, delay2);
            }
        )
    }).then(console.log)
};

resolveTwoTimes();

// 4

function handleReject () {
    return new Promise ((resolve, reject) => {
        let s = 3 + 4
        let delay3 = Math.random() * 2000 + 1000
        setTimeout(() => {
            if (s === 6) {
                resolve('success')
            }
            else {
                reject('Task 3 failed.')
            }
        }, delay3);
    })
}

handleReject().catch((message) => {
    console.log(message)
})

// 5

function quickResolve () {
    return new Promise ((resolve) => {
        let delay4 = Math.random() * 4000 + 1000
        setTimeout(() => {
            if (delay4 > 0.5) {
                resolve('Task 1 complete.')
            }
            else {
                resolve('Task 1 was quick.')
            }
        }, delay4);
    })
}

quickResolve().then((message) => {
    console.log(message)
});

// 6

function taskWithRandomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; 
        const randomNumber = Math.random();

        setTimeout(() => {
            if (randomNumber < 0.3) {
                reject("Task 3 failed");
            } else {
                resolve("Task 3 complete");
            }
        }, delay);
    });
}

taskWithRandomDelay()
    .then(message => console.log(message))
    .catch(error => console.error(error));
