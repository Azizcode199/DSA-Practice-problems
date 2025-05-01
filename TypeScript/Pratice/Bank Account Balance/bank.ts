class BankAccount {
    private _balance: number = 0;

    public get balance(): number {
        return this._balance;
    }

    public set balance(newBalance: number) {
        if (newBalance < 0) {
            throw new Error("Invalid balance");
        }
        this._balance = newBalance;
    }

    public einzahlen(betrag: number): void {
        if (betrag <= 0) {
            throw new Error("Einzahlungsbetrag muss größer als 0 sein.");
        }
        this._balance += betrag;
    }

    public abheben(betrag: number): void {
        if (betrag <= 0) {
            throw new Error("Der Abhebungsbetrag muss größer als 0 sein.");
        }
        if (betrag > this._balance) {
            throw new Error("Nicht genügend Guthaben.");
        }
        this._balance -= betrag;
    }
}

const account = new BankAccount();
account.einzahlen(1250);
account.abheben(10);
console.log(account.balance); // 👉 70


