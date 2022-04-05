const artiesten = [
    "Dua Lipa",
    "DJ Chuckie",
    "Je Broer"
];

for(let index = 0; index < artiesten.length; index++) {
    document.getElementById('artiesten-namen').innerHTML += artiesten[index] + "<br>";
}

function toonRandomArtiest() {
    let index = Math.floor(Math.random() * artiesten.length);
    document.getElementById('artiesten-random-naam').innerHTML = artiesten[index];
}

document.getElementById('toon-random-artiest').addEventListener('click', toonRandomArtiest);