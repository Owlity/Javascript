// let tall = [13, 45, 48, 62, 95];
// søk = 13;
// funnet = false;
// for(let verdi of tall) {
//     if(verdi == søk){
//         funnet = true;
//         break;
//     } 
// }
 
// if (funnet == true){
//     console.log("You found it");
//  }

// console.log('aaaaaaaaaaaa');
// let produker = [ 
//     {navn: "Mus", pris: 500}, 
//     {navn: "PC", pris: 10000}, 
//     {navn: "Tastatur", pris: 2000}, 
//     {navn: "World Conquest", pris: "Evig"}, ]

var elever = [
    { navn: "Jake", poeng: 46},
    { navn: "Saki", poeng: 68},
    { navn: "bort", poeng: 1000 }
];

function resultater(elever){
    let sum = 0

    let ceiling = elever[0].poeng;
    let floor = elever[0].poeng;


    let passer = 0

    for(let resultat of elever){
        sum += resultat.poeng
        if(resultat.poeng > ceiling){
            ceiling = resultat.poeng;
        }

        if(resultat.poeng < floor){
            floor = resultat.poeng;
        }

        if(resultat.poeng > 60){
            passer ++;
        }
    }
    console.log("The sum is: ", sum)

    console.log("The average sum is:", sum/elever.length)

    console.log("The highest points were: ", elever.navn, "med", ceiling)
    console.log("The lowest points were: ", floor
    )
    console.log(passer)
}
 
resultater(elever)
