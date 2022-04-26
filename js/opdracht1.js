const rodeStier = {
    naam: "Rode stier energie",
    prijs: 1.21,
    smaak: "Aardbei",

    titel: function() {
        return this.naam + " (" + this.smaak + ") 1 liter @ €" + this.prijs;
    }
};

document.getElementById('rode-stier-naam').innerHTML = rodeStier.naam;
document.getElementById('rode-stier-prijs').innerHTML = rodeStier.prijs;
document.getElementById('rode-stier-smaak').innerHTML = rodeStier.smaak;

document.getElementById('rode-stier-titel').innerHTML = rodeStier.titel();