
// sum = 0

// function terning(T1) {
//     while(sum <= 40)(
//         anwser = prompt("your sum is at ", sum, " do you want to try one more y/n")
//         if(anwser == 1)(
//             T1 = Math.ceil(Math.random()*6)
//         )
//         else(
//             break
//         )
//     )
//     resultat = T1
//     console.log(resultat)
//     }
    
// terning()   

// function terning(T1) {
//     T1 = Math.ceil(Math.random()*6)
//     resultat = T1
//     console.log(resultat)
//     }
    
// terning()
//let frukt = ["eple", "pære", "banan", "kiwi"]
// const readline = require("readline");
// const rl = readline.createinterface({
//     input: ProcessingInstruction.stdin,
//     output: ProcessingInstruction.stdout
// })

// rl.question("Skriv inn indexnummer fra liste(0 til 4)",(svar) =>{
//     if (svar == "0"){
//         console.log(frukt[0])
//     }
//     if (svar =="1"){
//         console.log(frukt[0])

// }

// }
// console.log(frukt[0]);
// frukt.push("pære")
// console.log(frukt.length);
// console.log(frukt[2])
// frukt[2]= "fortnite";
// console.log(frukt[2])
// let nummer = 1
// let handleliste = ["melk", "brød", "ost", "egg"];
// for (let vare of handleliste) {


// console.log(nummer, vare);
// nummer += 1
// }
// let ov
// let sum = 0
// let temperaturer = [12, 14, 11, 9, 15, 17, 13];  
// for (let temperatur of temperaturer) {

// sum = sum + temperatur;
// console.log(sum);
// avg = sum / temperaturer.length
// console.log(avg)

// if (temperatur[i] > 13){
//     ov +=1
// }
// console.log (ov)
// }

// let elev = {

// navn: "Ali",

// alder: 18,

// poeng: 72

// };
// console.log(elev.poeng);
// elev.poeng = 85
// console.log(elev.poeng);

// console.log(elev)
//let produkt = {

// navn: "Tastatur",

// pris: 599,

// antall: 3

// };
// console.log("Tastaturet koster ", produkt.pris, " kroner");
// console.log("vi har ", produkt.antall, " på lager");
// let lagerverdi = produkt.pris * produkt.antall;
// console.log("totalverdien er ", lagerverdi);
// if (produkt.antall > 0) {

// console.log("På lager");

// }
// else {

// console.log("Utsolgt");

// }

// // oppgave 3

// let produkt = {
// navn: "F15",
// prod: "Asus",
// pris: 7200,
// ram: 32,
// lager: "True",
// };

// let produkt2 = {
// navn: "F25",
// prod: "Acer",
// pris: 15000,
// ram: 64,
// lager: "False",
// };

// function visProdukt(produkt) {

// console.log(produkt.navn + " - " + produkt.pris + " kr");
// if (produkt.lager == "True"){
//     console.log("Varen er på lager.\n")
// } else{
//     console.log("Varen er ikke på lager.\n")
// }
// }

// visProdukt(produkt)
// visProdukt(produkt2)

// // oppgave 3/4
 
// let produkt = {
// navn: "F15",
// prod: "Asus",
// pris: 7200,
// ram: 32,
// ssd: 256,
// lager: "True",
// };
 
// let produkt2 = {
// navn: "F25",
// prod: "Acer",
// pris: 15000,
// ram: 64,
// ssd: 512,
// lager: "False",
// };
 
// function visProdukt(produkt) {
 
// console.log(produkt.prod, produkt.navn + " - " + produkt.pris + " kr");
// console.log("Spesifikasjoner:")
// console.log(produkt.ram,"GB RAM")
// console.log(produkt.ssd, "GB lagring")
 
// if (produkt.lager == "True"){
//     console.log("Varen er på lager.\n")
// } else{
//     console.log("Varen er ikke på lager.\n")
// }
// }
 
// visProdukt(produkt)
// visProdukt(produkt2)



// let elever = [

// { navn: "Ali", poeng: 67 },

// { navn: "Nora", poeng: 89 },

// { navn: "Sofie", poeng: 42 }

// ];

// for (let elev of elever) {

// console.log(elev.navn + " fikk " + elev.poeng + " poeng");
// if (elev.poeng > 50){
//     console.log("bestått");
    
// }
// else {
//     console.log("ikke bestått");
    
// }
// }


let elever = [

{ navn: "Ali", poeng: 67 },

{ navn: "Nora", poeng: 89 },

{ navn: "Sofie", poeng: 42 },

{ navn: "hery", poeng: 32 },

{ navn: "louis", poeng: 33 }

];
sum = 0;
pass = 0;
best = elever[0]

for (let elev of elever) {

console.log(elev.navn + " fikk " + elev.poeng + " poeng");
if (elev.poeng > 50){
    console.log("bestått");
    pass += 1
    
}
else {
    console.log("ikke bestått");
    
}

if (elev.poeng > best.poeng) {
    best = elev;
  }
}
let gjennomsnitt = sum / elever.length;
console.log("Gjennomsnittlig poengsum: " + gjennomsnitt);
console.log("Eleven med høyest poengsum: " + best.navn);

console.log("Antall som har bestått: " + pass);

