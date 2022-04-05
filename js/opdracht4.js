class Product {
    naam;
    merk;
    prijs;

    constructor(naam, merk, prijs) {
        this.naam = naam;
        this.merk = merk;
        this.prijs = prijs;
    }

    kortingPrijs(korting) {
        return this.prijs * (1-korting);
    }
}

const product1 = new Product("Macbook Pro M2", "Apple", 1233.55);
const product2 = new Product("Dropsleutels", "Haribo", 2.58);
const product3 = new Product("Eiersalade", "Eurostrijders", 1.00);

const producten = [product1, product2, product3];

document.getElementById('product-naam').innerHTML = product1.naam;
document.getElementById('product-merk').innerHTML = product1.merk;
document.getElementById('product-prijs').innerHTML = product1.prijs;
document.getElementById('product-korting').innerHTML = product1.kortingPrijs(0.05);

function berekenTotaalKorting(korting) {
    let totaal = 0;
    for(let index = 0; index < producten.length; index++) {
        totaal += producten[index].kortingPrijs(korting);
    }
    return totaal;
}

document.getElementById('producten-totaal-korting').innerHTML = "€" + berekenTotaalKorting(0.05);
