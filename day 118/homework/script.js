class person {
    #name;
    #age;
    constructor (name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name () {
        return this.#name;
    }

    get age () {
        return this.#age;
    }

    set name (newName) {
        this.#name = newName;
    }

    set age (newAge) {
        this.#age = newAge
    }


}