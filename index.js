import express from 'express';
import pokemons from './resources/pokemons.js';

const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.post('/pokemons'), (request, response) => {
    console.log(request.body);
}

// app.get('/', (request, response) => {
//     return response.end('Welcome to my first API');
// })

// app.get('/all-pokemon', (request, response) => {
//     return response.json(pokemons);
// })

// app.get('/pokemon/:id', (request, response) => {
//     let pokemonId = parseInt(request.params.id);
//     let pokemonById = pokemons.find(pokemon => pokemon.id === pokemonId);

//     if(pokemonId && pokemonById){
//         return response.status(200).json(pokemonById);
//     }else{
//         return response.status(404).json({error : 404, message : 'Pokemon not found'});
//     }
// })



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})