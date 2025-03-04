import express from 'express';
import movies from './resources/movies.js';

const app = express();
const port = 3000;


app.get('/', (request, response) => {
    return response.end('Welcome to my first APIs');
})

app.get('/movies', (request, response) => {
    return response.json(movies);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})