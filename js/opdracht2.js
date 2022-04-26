const movieQuotes = [
    "May the force be with you. (Star Wars)",
    "Say hello to my little friend! (Scarface)",
    "The name is Bond, James Bond. (James Bond)"
];


for(let index = 0; index < movieQuotes.length; index++) {
    document.getElementById('movie-quotes').innerHTML += "<li>" + movieQuotes[index] + "</li>";
}

function randomQuote() {
    let index = Math.floor(Math.random() * movieQuotes.length);
    let quote = movieQuotes[index];

    document.getElementById('movie-quotes-random').innerHTML = quote;
}

document.getElementById('toon-movie-quotes-random').addEventListener('click', randomQuote);