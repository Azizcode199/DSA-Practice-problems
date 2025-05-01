class Calculation {
    public static pi: number = Math.PI;

    public static add(n1: number, n2: number): string {
        return `Sum: ${n1 + n2}`
    }

    public static subs(n1: number, n2: number): string {
        return `Substraktion: ${n1 - n2}`;
    }

    public static multiply(n1: number, n2: number): string {
        return `Multiply: ${n1 * n2}`;
    }

    public static div(n1: number, n2: number): string {
        if (n2 === 0) {
            return "Fehler: Division durch 0 ist nicht erlaubt.";
        }
        return `Division: ${n1 / n2}`;
    }
    
    
}

console.log(Calculation.pi)
console.log(Calculation.div(5254, 55))
console.log(Calculation.add(12,55))
console.log(Calculation.subs(5245, 10000))
console.log(Calculation.multiply(5254, 5))