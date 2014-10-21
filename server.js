'use strict';

var express = require('express'),
	app = express(),
	mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/eCommerce');

app.listen(9008);