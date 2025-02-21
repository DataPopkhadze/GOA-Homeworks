class mathHelpers {
    constructor(PI){
        this.PI = PI;
    }

    power(firstNum, secondNum) {
        this.first = firstNum;
        this.second = secondNum;
        return Math.pow(firstNum, secondNum)
    };
};

class randomHelpers {
    constructor(){
        this.random = Math.random()
    }

    randomNumber(min, max) {
        this.min = min;
        this.max = max;
        return Math.floor(Math.random() * (max - min + 1)) + min
    };
};

class time_helpers {
    constructor(){
        this.time = Date.now();
    }

    milisecstoreadeableseconds() {
        this.time = Date.now()
        return Math.floor(this.time / 1000)
    };
};