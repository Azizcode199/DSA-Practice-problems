let benutz = 32;
function zahl() : number{
    if(benutz  % 2 ===0){
        console.log("Gerade")
    }else{
        console.log("Ungerade")
    }
    return benutz;
}

zahl()

console.log("----------------------")
// Aufgabe:
// Der Benutzer gibt zwei Zahlen ein.
// Wenn die erste Zahl größer ist als die zweite, zeige „Erste Zahl ist größer“.
// Sonst zeige „Zweite Zahl ist größer oder gleich“.

let zahl_1 = 85;
let zahl_2 = 3
function zahle() : void{
    if(zahl_1 > zahl_2){
        console.log(`${zahl_1} is großer als ${zahl_2}`)
    }else if (zahl_1 === zahl_2) {
        console.log(`${zahl_1} is gleich ${zahl_2}`)
    } else {
        console.log(`${zahl_1} is klein als ${zahl_2}`)
    }
    
}

zahle()

console.log("---------------------------------")
// Aufgabe:
// Der Benutzer gibt eine Zahl ein.
// Wenn die Zahl kleiner als 0 ist, zeige „Negativ“.
// Wenn die Zahl genau 0 ist, zeige „Null“.
// Wenn die Zahl größer als 0 ist, zeige „Positiv“.
function positivNagativ() : void{
    let zahl = 2;
    if(zahl < 0){
        console.log("Negativ")
    }else if(zahl === 0){
        console.log("Null")
    }else{
        console.log("Positiv")
    }
}
positivNagativ()
console.log("------------------")
// Aufgabe:
// Der Benutzer gibt eine Note (1 bis 6) ein.
// Zeige:
// Bei 1: „Sehr gut“
// Bei 2: „Gut“
// Bei 3: „Befriedigend“
// Bei 4: „Ausreichend“
// Bei 5: „Mangelhaft“
// Bei 6: „Ungenügend“
// Sonst: „Ungültige Note“

function note(): void{
    let benutzerNote = 6;
    if(benutzerNote == 1){
        console.log("Sehr gut")
    }else if(benutzerNote == 2){
        console.log("gut")
    }else if(benutzerNote == 3){
        console.log("Befriedigend")
    }else if(benutzerNote == 4){
        console.log("Ausreichend")
    }else if(benutzerNote == 5){
        console.log("Mangelhaft")
    }else if(benutzerNote == 6){
        console.log("Ungenügend")
    }
    else{
        console.log("Ungültige Note")
    }
}

note()

// function note(): void {
//     let benutzerNote = 6;

//     switch (benutzerNote) {
//         case 1:
//             console.log("Sehr gut");
//             break;
//         case 2:
//             console.log("Gut");
//             break;
//         case 3:
//             console.log("Befriedigend");
//             break;
//         case 4:
//             console.log("Ausreichend");
//             break;
//         case 5:
//             console.log("Mangelhaft");
//             break;
//         case 6:
//             console.log("Ungenügend");
//             break;
//         default:
//             console.log("Ungültige Note");
//     }
// }

// note();

console.log("-------------------------------------------------------------")
// Aufgabe:
// Der Benutzer gibt ein Passwort ein.
// Wenn das Passwort „geheim“ ist, zeige „Zugang erlaubt“.
// Sonst zeige „Zugang verweigert“.

function benutzerPasswort() : void{
    let password = 'geheim';
    if(password === 'geheim'){
        console.log("Zugang erlaubt")
    }else{
        console.log("Zugang verweigert")
    }

}
benutzerPasswort()
console.log("------------------------------------------")
// Aufgabe:
// Der Benutzer gibt eine Zahl ein.
// Wenn die Zahl ein Vielfaches von 5 ist, zeige „Teilbar durch 5“.
// Sonst zeige „Nicht teilbar durch 5“.

function zahlEingabe() : void{
    let benutzer = 5
    if(benutzer % 5 === 0){
        console.log("Teilbar durch 5")
    }else{
        console.log("Nicht teilbar durch 5")
    }
}
zahlEingabe()

// Aufgabe:
// Der Benutzer gibt 3 Zahlen ein.
// Zeige, welche Zahl die größte ist.
// Wenn zwei oder drei Zahlen gleich groß sind, zeige: „Zahlen sind gleich“.

function gib(): void {
    let a = 5, b = 2, c = 5;

    if (a === b && b === c) {
        console.log(`Zahlen sind gleich`);
    } else if (a >= b && a >= c) {
        console.log(`Größte Zahl ist: ${a}`);
    } else if (b >= a && b >= c) {
        console.log(`Größte Zahl ist: ${b}`);
    } else {
        console.log(`Größte Zahl ist: ${c}`);
    }
}
gib();

console.log("-----------------------")
// Aufgabe:
// Du hast ein Array mit Zahlen:
// let zahlen = [3, 7, 2, 9, 5];
// Finde die größte Zahl im Array.
// Zeige: „Größte Zahl ist: ...“

function großer() : void{
    let zahlen = [3, 7, 2, 9, 5];
    let groesste = zahlen[0];

    for (let i = 1; i < zahlen.length; i++) {
        if(zahlen[i] > groesste){
            groesste = zahlen[i]
        }
    }
    console.log("Größte Zahl ist: " + groesste);

}

großer()
