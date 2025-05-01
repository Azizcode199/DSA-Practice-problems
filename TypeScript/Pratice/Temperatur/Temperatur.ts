class Temperatur {
    private _celsius: number = 0;

    public get celsius(): number {
        return this._celsius;
    }

    public set celsius(newCelsius: number) {
        this._celsius = newCelsius;
    }

    public get fahrenheit(): number {
        return (this._celsius * 9) / 5 + 32;
    }

    public set fahrenheit(newFahrenheit: number) {
        this._celsius = (newFahrenheit - 32) * 5 / 9;
    }

    public anzeige(): string {
        return `Temperatur: ${this._celsius.toFixed(2)} °C / ${this.fahrenheit.toFixed(2)} °F`;
    }
}
const tem = new Temperatur();
tem.celsius = 25;
console.log(tem.fahrenheit);       // 👉 77
console.log(tem.anzeige());        // 👉 Temperatur: 25.00 °C / 77.00 °F

tem.fahrenheit = 50;
console.log(tem.anzeige());        // 👉 Temperatur: 10.00 °C / 50.00 °F
