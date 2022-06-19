import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

let tweets = [];
let user;

server.post('/sign-up', (req, res) => {

    user = [];

    user.push(
        {
            username: req.body.username,
            avatar: req.body.avatar
        }
    );

    res.send('ok');

})

server.get('/tweets', (req, res) => {

    res.send(tweets);

})

server.post('/tweets', (req, res) => {
    
    tweets.push(
        {
            username: req.body.username,
            avatar: user[0].avatar,
            tweet: req.body.tweet
        }
    );

    res.send('ok');

})

server.listen(5000);