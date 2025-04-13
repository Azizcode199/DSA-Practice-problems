class Student {
    name: string;
    age: number;
    grade: number;

    constructor(name: string, age: number, grade: number) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    CanLearn(): void {
        console.log("I can learn");
    }
}

let std: Student = new Student("Ali", 20, 1);
console.log(std)