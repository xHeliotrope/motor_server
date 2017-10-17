const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
require('dotenv').config()
//var motor = require('./motor')

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) { 
    res.render('pages/index');
})

io.on('connection', function(socket){
  console.log(process.env.access_token);
  console.log('a user connected')
  socket.on('disconnect', function(){
    console.log('user disconnected');
  })
})

http.listen(app.get('port'), function() {
  console.log('Node app is running on port ', app.get('port'))
})


