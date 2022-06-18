import express from 'express';
import cors from 'cors';

const server = express();

server.use(cors());

server.post('/sign-up', (req, res) => {
    res.send('alo galera de piao alo galera de cowboy');
})

server.listen(4000);