class Persons {
    name:string;
    age: number;
    hobbies: string[];

    constructor(name : string, age : number, hobbies:string[]){
        this.name = name
        this.age = age
        this.hobbies = hobbies
    }
}

const person1 = new Persons("Baktash", 35, ["walking", "Fitness"]);
const person2 = new Persons("Mike", 35, ["Boxing", "Footbal"]);
const person3 = new Persons("Thoma", 35, ["Coder", "Fitness"]);
console.log(person1); 
console.log(person2); 
console.log(person3)