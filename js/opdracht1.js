const appelsientje = {
    naam: "Appelsientje",
    prijs: 1.29,
    volume: 1.50,

    titel: function() {
        return this.naam + " " + this.volume + " @ €" + this.prijs;
    }
};

document.getElementById('appelsientje-naam').innerHTML = appelsientje.naam;
document.getElementById('appelsientje-prijs').innerHTML = appelsientje.prijs;
document.getElementById('appelsientje-volume').innerHTML = appelsientje.volume;
document.getElementById('appelsientje-titel').innerHTML = appelsientje.titel();


