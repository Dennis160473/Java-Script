// Übungen
// Textausgabe
console.log("Hello World!");

// Variablen setzen und ausführen
let my_number = 1
console.log(my_number);
let my_name = "Dennis";
let my_age = 51;
console.log(my_name);
console.log(my_age);
console.log(`I am ${my_name} und ${my_age} is my Age.`);

// Primitive Datentypen
a = 5
a = true
a = "Text"
a = undefined
a = null

// Primitive Rechenoperationen mit Variablen
let x = 19;
let y = 73;
let z;
z = x - y
console.log(z)
console.log(x + y)
console.log(x - y)
console.log(x * (y + y))
console.log(x / y)
console.log(0.1 + 1)
// Hochtahl
z = y ** 2 - x ** 2
console.log(z)
// Quadratwurzel mit Variablen
const number1 = 2.25;
const number2 = -4;
const result1 = Math.sqrt(number1);
const result2 = Math.sqrt(number2);
console.log(`The square root of ${number1} is ${result1}`);
console.log(`The square root of ${number2} is ${result2}`);
// Modulo (Rest der Division)
z = y % x
console.log(z)
// Test
let result = ((x + y) * (x - y) + (x * y)) / (x + (y / 2)) - (x ** 2 - y ** 2) / (y + 1);
console.log(result);

// Boolsche Operationen
//xOR
//console.log(zahl1 && zahl2);
//console.log(zahl1 || zahl2);
//console.log(zahl1 == zahl2);
//console.log(zahl1 != zahl2);
//console.log(zahl1 > zahl2);
//console.log(zahl1 < zahl2);
//console.log(zahl1 >= zahl2);
//console.log(zahl1 <= zahl2);
//console.log(zahl1 === zahl2);
//console.log(zahl1 !== zahl2);
console.log(true && 3 > 2);
console.log(3 >= 3);
console.log(false || 1 == 2)
console.log(1 == '1');
console.log(1 === '1');

// Fallunterscheidungen
let my_Name = 'Tom';
if (my_Name === 'Lukas') {
    console.log('Alles Gute!');

}   else if (my_Name === 'Tom') {
    console.log('Bis Morgen!');
}   else {
    console.log('Wer bist Du?');
}
// Fingerübung: 
// Definiert 2 variablen (zahlen) a und b
// Gebt mithilfe von if-else if-else aus, welche Größer ist oder ob sie
// gleich groß sind
let n1 = 16
let n2 = 4
if (n1 <= n2) {
    console.log('Gewinner ist Nummer 1');
} else {
    console.log('Gewinner ist Nummer 2');
}

// Fingerübung 2: 
// Erstelle eine variable divisionResult
// Schreibe in diese Variable das Ergebnis von a/b, aber nur,
// wenn b nicht 0 ist. Sonst benutze console.error um einen Fehler auszugeben.
let zahl1 = a
let zahl2 = b
let divisionResult = a/b
if (zahl2 < 0) {
    console.log(divisionResult)
} else {
    console.error('Mit 0 rechne ich nicht!');
}

// Fingerübung 3: 
// Erstelle eine variable punkte
// Die Bewertung läuft wie folgt:
// Mehr als 90 Punkte: Ausgabe "Note 1"
// Mehr als 80 Punkte: Ausgabe "Note 2"
// Mehr als 70 Punkte: Ausgabe "Note 3"
// Mehr als 60 Punkte: Ausgabe "Note 4"
// Sonst: Ausgabe "Durchgefallen!"
let punkte 
if (<= 90) {
    console.log('Note 1')
} elif ()









