'use strict';

var express = require('express'),
	app = express(),
	mongoose = require('mongoose');

var Customer = require('./lib/customer'),
	Order	 = require('./lib/order'),
	Product  = require('./lib/product');

var mongoUrl = 'mongodb://localhost/eCommerce';

// mongoose.connect(mongoUrl);

// app.listen(9008);

var connection = mongoose.connection;
connection.once('open', function (){
	console.log('Successfully connected to ' + mongoUrl)
})
global.mongooseConnection = connection;
