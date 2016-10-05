var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/bookAPI'); 
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var Book = require('./models/bookModel');

//when creating the book model this passes in the book model
var bookRouter = require('./Routes/bookRoutes')(Book);



app.use('/api/books', bookRouter);


app.get('/', function(req,res){
	res.send('Welcome to my API!!!');
});

 
app.listen(port, function(){
	console.log('Listening on port '+ port);
});
