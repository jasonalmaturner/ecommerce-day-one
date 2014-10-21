'use strict';

var mongoose = require('mongoose'),
	Customer = require('lib/customer'),
var mongoUrl = 'mongodb://localhost/eCommerce';


mongoose.connect(mongoUrl);

var jason = new Customer({
	name: "jason turner",
	email: "jasonalmaturner@gmail.com",
	shippingAddress: "122 South 350 East Burley, ID 83318",
	billingAddress: "122 South 350 East Burley, ID 83318",
	phoneNumber: 208.650.0116,
	password: 987654321,
	active: true
})

jason.save(function(err){
	if(err){
		console.log(err);
	} else {
		console.log('jason was saved')
	}
})
