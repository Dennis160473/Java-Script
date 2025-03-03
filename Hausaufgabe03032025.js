let my_city = 'Berlin';
console.log(my_city);
let my_first = 'Dennis';
console.log(my_first);
let my_last = 'Angermann';
console.log(my_last);
let my_age = 51
console.log(my_age);
//
let x = 'red';
let y = 'green';
let z = y;
y = x;
x = z;
console.log(x);
//
function color() {
    return 'red';
  }
let result = color();
console.log(result);

function b() {
    return 'Hello and Welcome!';
  }
  let greeting = b();
  console.log(greeting);
//
function give(enter) {
    return enter;
  }
let fruit = give('Apple');
console.log(fruit);

function welcome(he) {
    return 'Hello ' + he + '!';
  }
let he = welcome('Ada');
console.log(he);

function whoIs(her) {
    return 'Who is ' + her + '?';
  }
  
  let h = whoIs('Fred');
  console.log(h);
//
function hi(end) {
    return 'Hi ' + end + '!';
  }
  
let h1 = hi('Selva');
let h2 = hi('Pola');
let e = h1 + ' ' + h2;
console.log(e);
//
function rufe(Mich) {
    let ruf = Mich + Mich;
    console.log(ruf);
    return ruf;
  }
//
function long(s) {
    return s.length;
  }
let city = 'Berlin';
anzahl = city.length;
console.log(anzahl);
//
let n1 = 'Maria'.charAt(0);
console.log(n1);
let n2 = 'Maria'.charAt(1);
console.log(n2);
let n3 = 'Maria'.charAt(5);
console.log(n3);
let n4 = 'Maria'.charAt();
console.log(n4);

function abkuerzung(s1, s2) {
    return s1.charAt(0) + s2.charAt(0);
  }
s1 = 'Universitätsstadt'.charAt(5);
s2 = 'Ulm'.charAt();
console.log(s1 + s2);
//
function firstChar(text) {
    let textGetrimmt = text.trim();
    return textGetrimmt.charAt(0);
  }
let park = ' Rosa Parks ';
console.log(park);
//
function indexOfIgnoreCase(s1, s2) {
    let s1Klein = s1.toLowerCase();
    let s2Klein = s2.toLowerCase();
    return s1Klein.indexOf(s2Klein);
  }
let nr1 = 'Bit'.indexOf('it');
console.log(nr1);
let nr2 = 'Bit'.indexOf('js');
console.log(nr2);
let nr3 = 'Bit'.indexOf('IT');
console.log(nr3);
//
let num1 = "Fred Feuerstein".indexOf("e", 2);
console.log(num1);
let num2 = "Fred Feuerstein".indexOf("e", 3);
console.log(num2);
let num3 = "Fred Feuerstein".indexOf("e", 7);
console.log(num3);

let see = 'see and stop'.substr(0, 3);
console.log(see);
let and = 'see and stop'.substr(4, 3);
console.log(and);
let stop = 'see and stop'.substr(8);
console.log(stop);
//
function firstWord(s) {
    let firstBlank = s.indexOf(' ');
    return s.substr(0, firstBlank);
  }
let k = 'World Wide Web'
console.log(k);
//
let str = 'Hallo Marcel!';
let newstr = str.replace('Marcel', 'Robert');
console.log(newstr);

let newname = 'Peter'.replace('e', 'a');
console.log(newname);

let nurso = 'sowie so'.replace('wie', '');
console.log(nurso);

//function convert(dateEn) {
//    let dateDe = dateEn.replace('-', '.');
//    dateDe = dateDe.replace('-', '.');
//    dateDe = dateDe.replace('/', '.');
//    dateDe = dateDe.replace('/', '.');
//    return dateDe;
//  }
//
function add(f, g) {
    return f + g;
  }

let f = 16
let g = 4
console.log(f + g);

let v = 3;
v++;
v = v * 2;
v--;
console.log(v)
//
function toFahrenheit(celsius) {
    return 1.8 * celsius + 32;
  }
let temperature = 32
console.log(temperature)
//
let t = 7 % 2;
console.log(t)
let u = 20 % 3;
console.log(u)
//
function einer(n) {
    return n % 10;
  }
let one = einer(200);
console.log(one);
//
function mittelwert(x1, y1) {
    return (x1 + y1) / 2;
  }
let x1 = 3 + 4 * 2;
let x2 = (3 + 4) * 2;
let two = mittelwert(66, 88);
console.log(two);
//