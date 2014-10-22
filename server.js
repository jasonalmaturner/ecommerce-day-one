'use strict';

var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

var Customer = require('./lib/models/customer'),
	Order	 = require('./lib/models/order'),
	Product  = require('./lib/models/product'),
	ProductController = require('./lib/controllers/product-controller'),
	CustomerController = require('./lib/controllers/customer-controller');

//middleware
app.use(bodyParser.json());

//Mongoose Connection
var mongoUrl = 'mongodb://localhost/eCommerce';
mongoose.connect(mongoUrl);

var connection = mongoose.connection;
connection.once('open', function (){
	console.log('Successfully connected to ' + mongoUrl)
})
global.mongooseConnection = connection;

//server startup
app.listen(9008, function(){
	console.log('Express listening on port 9008')
});

//routes
app.get('/products', ProductController.get);

app.post('/products', ProductController.post);

app.put('/products/:id', ProductController.put);

app.get('/customers', CustomerController.get);

app.post('/customers', CustomerController.post);

app.put('/customers/:id', CustomerController.put);