import express from 'express';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());

let user = [
    {
      username: "bobesponja",
      avatar:
        "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
    },
  ];
  
  let tweets = [
    {
      username: "bobesponja",
      tweet: "eu amo o hub",
    },
  ];

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

    const newTweets = [...tweets].reverse();

    res.send(newTweets.slice(0,10));

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