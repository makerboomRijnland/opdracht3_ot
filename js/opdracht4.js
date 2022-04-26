class Docent {
    voornaam;
    achternaam;
    favorieteFilms;

    constructor(voornaam, achternaam, favorieteFilms) {
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.favorieteFilms = favorieteFilms;
    }

    naamEnFilms() {
        return this.voornaam + " " + this.achternaam + "(" + this.favorieteFilms.length + ")"
    }
}

const docent1 = new Docent("Marcel1", "Akerboom1", ['GhostDog', 'Terminator 1']);

let docent1Naam = docent1.voornaam + " " + docent1.achternaam;
document.getElementById('docent-naam').innerHTML = docent1Naam;

document.getElementById('docent-films').innerHTML = "";
for(let index = 0; index < docent1.favorieteFilms.length; index++) {
    let film = docent1.favorieteFilms[index];
    document.getElementById('docent-films').innerHTML += film + "<br>";
}

const docenten = [
    new Docent("marcel1", "akerboom1", ['GhostDog', 'Terminator 1']),
    new Docent("marcel2", "akerboom2", ['GhostDog 2']),
    new Docent("marcel3", "akerboom3", ['GhostDog 3', 'Terminator 3']),
    new Docent("marcel4", "akerboom4", ['GhostDog 4', 'Terminator 4']),
    new Docent("marcel5", "akerboom5", ['GhostDog 5', 'Terminator 5'])
];

function showDocentEnFilms() {
    document.getElementById('docenten-en-films').innerHTML = "";
    for(let index = 0; index < docenten.length; index++) {
        let docent = docenten[index];
        document.getElementById('docenten-en-films').innerHTML += "<li>" + docent.naamEnFilms() + "</li>"
    }
}
document.getElementById('toon-docenten-en-films').addEventListener('click', showDocentEnFilms);
