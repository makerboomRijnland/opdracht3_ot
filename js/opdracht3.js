const docenten = [
    {
        voornaam: "marcel",
        achternaam: 'akerboom',
        favorieteFilms: ['GhostDog', 'Terminator 1']
    },
    {
        voornaam: "marcel2",
        achternaam: 'akerboom2',
        favorieteFilms: ['GhostDog2', 'Terminator 2']
    },
    {
        voornaam: "marcel3",
        achternaam: 'akerboom3',
        favorieteFilms: ['GhostDog3', 'Terminator 3']
    }
];

for(let index = 0; index < docenten.length; index++) {
    let docent = docenten[index];
    let naam = docent.voornaam + " " + docent.achternaam;
    document.getElementById('docenten-namen').innerHTML += naam + "<br>";
}

function randomDocent() {
    let index = Math.floor(Math.random() * docenten.length);
    let docent = docenten[index];
    let naam = docent.voornaam + " " + docent.achternaam;

    document.getElementById('docenten-random-naam').innerHTML = naam;
}

document.getElementById('toon-docenten-random-naam').addEventListener('click', randomDocent);

function randomFilm() {
    let docentIndex = Math.floor(Math.random() * docenten.length);
    let docent = docenten[docentIndex];

    let filmIndex = Math.floor(Math.random() * docent.favorieteFilms.length);
    let film = docent.favorieteFilms[filmIndex];

    document.getElementById('docenten-random-film').innerHTML = film;
}

document.getElementById('toon-docenten-random-film').addEventListener('click', randomFilm);