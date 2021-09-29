export const charactersService = fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=8')
.then(response => response.json());