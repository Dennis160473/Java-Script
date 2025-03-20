// Vorlage
//let name = prompt("Wie heißt du, tapferer Held?");
//alert("Freut mich, dich kennenzulernen, " + name + "!");

//let alter = prompt("Wie alt bist du?");
//if (alter >= 18) {
//  alert("Du bist alt genug, um in den Kampf zu ziehen!");
//  let waffe = prompt("Wählst du das Schwert oder Magie?");
//  if (waffe.toLowerCase() === "schwert") {
//    alert("Du schwingst dein Schwert und kämpfst tapfer!");
//  } else {
//    alert("Du wirkst einen mächtigen Zauber!");
//  }
//} else {
//  alert("Du bist noch zu jung. Trainiere weiter und kehre später zurück!");}

// Übung 2 - 20.03.2025
// Option 2: Mini-Projekt „Zahlenratespiel“

//Falls ihr lieber etwas anderes machen wollt, könnt ihr ein Zahlenratespiel programmieren.
// Spielmechanik:
// 1. Der Computer denkt sich eine zufällige Zahl zwischen 1 und 10 aus.
// let zufallszahl = Math.floor(Math.random() * 10) + 1; -> Damit könnt ihr bei jedem Neustart eine Zufallszahl zwischen 1 & 10 zufällig generiere lassen
// 2. Der Spieler muss die Zahl erraten.
// 3. Falls die Zahl zu hoch oder zu niedrig ist, bekommt der Spieler eine entsprechende Rückmeldung.
// 4. Falls die Zahl richtig ist, erscheint eine Glückwunsch-Nachricht.
//Abgabe: Github-Repo mit eurem Code & gerne eine Videoaufzeichnung vom Spiel oder Screenshot von der Konsolen Ausgabe

let input = prompt("Bitte gib Deine Zahl ein!");
let zufallszahl = Math.floor(Math.random() * 10) + 1;
if (input > zufallszahl) {
  alert("Your Input was false! Please try again.");
}
if (input > zufallszahl) {
  alert("Your Input was false! Please try again.");
} else {
  alert("Your input is alright! Would you like to try again?");
}
