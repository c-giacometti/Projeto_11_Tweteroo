import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

let tweets = [];

server.post('/sign-up', (req, res) => {
    res.send('alo galera de piao alo galera de cowboy');
})

server.get('/tweets', (req, res) => {
    res.send(tweets);
})

server.post('/tweets', (req, res) => {

})

server.listen(5000);