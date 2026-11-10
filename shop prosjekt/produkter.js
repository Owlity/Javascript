const produkter = [
    {
        id: 1,
        navn: "Salat",
        pris: 40,
        bilde: "images/salat.jpg"
    },
    {
        id: 2,
        navn: "pizza",
        pris: 80,
        bilde: "images/pizza.jpg"
    },
    {
        id: 3,
        navn: "sopp pizza",
        pris: 80,
        bilde: "images/sopp.jpg"
    },
    {
        id: 4,
        navn: "pesto pasta",
        pris: 64,
        bilde: "images/pesto.jpg"
    },
    {
        id: 5,
        navn: "lasagna",
        pris: 72,
        bilde: "images/lasagne.jpg"
    }
]

knapp.addEventListener("click", () => { 
 
    let id = Number(knapp.dataset.id); 
 
    console.log("Produkt-id:", id); 
 
}); 


let handlekurv = [];

const popup = document.getElementById("popup");

const popupIMG = document.getElementById("popupIMG");

const close = document.querySelector(".close");

document.querySelectorAll(".ContIMG").forEach(img => {

    img.addEventListener("click", () => {

        popupIMG.src = img.src;

        popup.style.display = "flex";

    });

});

close.addEventListener("click", () => {

    popup.style.display = "none";

});

popup.addEventListener("click", (event) => {

    if (event.target === popup) {

        popup.style.display = "none";

    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        popup.style.display = "none";

    }

});

function add_item(item) {
    handlekurv.push(item)
    console.log(popupIMG.src)
}

document.querySelectorAll(".kjopKnapp").forEach(knapp => {  

knapp.addEventListener("click", () => {   
 
    console.l ;("Knappen ble trykket!");   
 
});   

});  


let valgtProdukt = produkter.find( 

 produkt => produkt.id === id 

);
console.log("Du valgte:", valgtProdukt);

function oppdaterAntall() { 

 

    document.getElementById("antallKurv").textContent = 

        handlekurv.length; 

 

}

for (let produkt of handlekurv) { 

 

    liste.innerHTML += ` 

        <p> 

            ${produkt.navn} - ${produkt.pris} kr 

        </p> 

    `; 

 

} 
kurvKnapp.addEventListener("click", () => { 

 

    visHandlekurv(); 

 

    kurvPopup.style.display = "flex"; 

 

});
lukkKurv.addEventListener("click", () => { 

 

    kurvPopup.style.display = "none"; 

 

});