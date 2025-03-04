import express from 'express';
import pokemons from './resources/pokemons.js';

const app = express();
const port = 3000;


app.get('/', (request, response) => {
    return response.end('Welcome to my first APIs');
})

app.get('/all-pokemon', (request, response) => {
    return response.json(pokemons);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})