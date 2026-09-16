

function terningkast(){
kast1= Math.ceil(Math.random()*6)
return kast1
}
function nultilhundre(){
    sum = 0
    antalkast = 0
    while(sum<=40){
    kast = terningkast()
    antalkast+=1
    if (kast == 1){
        sum=0
        console.log("kastnr. ", antalkast, "Du kastet 1 og starter på nytt")
    }
    else{
        sum+= kast
        console.log("kastnr. ", antalkast, " ga terningkast", kast, " og summen blir ", sum)
    }
}

console.log("gratulerer du vant med ", antalkast, "kast")
}
nultilhundre()
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
