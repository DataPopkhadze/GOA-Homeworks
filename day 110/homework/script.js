class animal {
    constructor(name, age, weight) {
        this.name = name
        this.age = age
        this.weight = weight
    }

    animal() {
        return `my name is: ${this.name}, i am ${this.age} years old and i weight ${this.weight} KG`
    }
}

class car {
    constructor(model, year, engine) {
        this.model = model
        this.year = year
        this.engine = engine
    }

    car () {
        return `my model is ${this.model}, i was created in ${this.year} and my engine is ${this.engine}`
    }
}

class human {
    constructor(name, age, birthdate) {
        this.name = name
        this.age = age
        this.birthdate = birthdate
    }

    greeting() {
        return `my name is ${this.name}, i am ${this.age} old and i was born in ${birthdate}`
    }
}

const animal = new animal("bear", 4, 340)
const car = new car("E46", 2005, 2.5)
const human = new human("data", 14, 31/10/2010)