const producten = [
    {
        naam: "Macbook Pro M2",
        merk: "Apple",
        prijs: 1233.55
    },{
        naam: "Dropsleutels",
        merk: "Haribo",
        prijs: 2.58
    },{
        naam: "Eiersalade",
        merk: "Eurostrijders",
        prijs: 1.00
    }
];

for(let index = 0; index < producten.length; index++) {
    let product = producten[index];
    document.getElementById('product-namen').innerHTML += product.naam + "<br>";
}

function randomProduct() {
    let index = Math.floor(Math.random() * producten.length);
    document.getElementById('product-random-naam').innerHTML = producten[index].naam;
}

document.getElementById('toon-random-product').addEventListener('click', randomProduct);

function totaalPrijs() {
    let totaal = 0;
    for(let index = 0; index < producten.length; index++) {
        totaal += producten[index].prijs;
    }
    return totaal;
}

document.getElementById('producten-totaal-prijs').innerHTML = "€" + totaalPrijs();