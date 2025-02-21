// 1) შექმენით წიგნების კლასი ორი ჩვეულებრივი მეთოდით, ერთი გეთერ მეტოით და სამი ფროფერთით. შექმენით სამი წიგნის ჟანრის კლასი (მაგ. სათავგადასავლო, სატირა, ფანტაზია), სამივე მემკვიდრე წიგნის კლასის. თითოეულს უნდა ჰქონდეს ერთი მშობელი კლასის მთლიანად შეცვლილი მეთოდი, მეორე ერთ ერთ მეთოდზე დაშეენებული მეთოდი ( მშობელი კლასის მეთოდი + ახალი ფუნქციონალი ), და ერთი სუილად ახალი, უნიკლარი მეთოდი. ასევე თითოეულს უნდა ჰქონდეს ორი ახალი ფროფერთი.
// წარმატებები ♡＾▽＾♡
class books{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const age = new Date().getFullYear() - this.year;
        return `${this.title} is ${age} years old`;
    }
    get book1(){
        return this.book1;
    }
}

class satire extends books{
    constructor(title,author,year){
        super(title,author,year);
    }

}

class fantasy extends books{
    constructor(title,author,year){
        super(title,author,year);
    }
    
}

class adventure extends books{
    constructor(title,author,year){
        super(title,author,year);
    }
}