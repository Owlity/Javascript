
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
let frukt = ["eple", "pære", "banan", "kiwi"]
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
let ov
let sum = 0
let temperaturer = [12, 14, 11, 9, 15, 17, 13];  
for (let temperatur of temperaturer) {

sum = sum + temperatur;
console.log(sum);
avg = sum / temperaturer.length
console.log(avg)

if (temperatur[i] > 13){
    ov +=1
}
console.log (ov)
}
