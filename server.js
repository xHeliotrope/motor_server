require('dotenv').config()
const isOnline = require('is-online')

const Twitter = require('twitter');
const express = require('express')
const app = express()
const http = require('http').Server(app)

const io = require('socket.io')(http)
//var motor = require('./motor')

let client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token_key,
    access_token_secret: process.env.access_token_secret
})


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) { 
    res.render('pages/index');
})

let tweet = "fake tweet"

client.get('statuses/user_timeline', {screen_name: 'ChirpTheMsgMstr'}, function(error, tweets, response) {
    tweets = tweets.map(function(tweet){
	return tweet.text
    });
    if (!error) {
	console.log(tweets);
	tweet = tweets[0];
    }
});


let stream = client.stream('statuses/filter', {follow: '243730082,1909219404'}, stream => {
	console.log('hey im in here')
	stream.on('data', event => {
	    let tweet = event
	    if(tweet.delete) {
		tweet.text = "the tweet has been discarded"
	    }
	    tweet = tweet.text
	})
    })

io.on('connection', function(socket){
    console.log(tweet);
    socket.on('disconnect', function(){
      console.log('user disconnected');
    })
})

http.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'))
})


