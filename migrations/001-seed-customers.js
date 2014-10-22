'use strict';
 
var Customer = require('../lib/customer')
require('../server')

exports.up = function(next){
	var jason = new Customer({
		name: {
			first: 'Jason',
			middle: 'Alma',
			last: 'Turner'
		}
		email: "jasonalmaturner@gmail.com",
		shippingAddress: "122 South 350 East Burley, ID 83318",
		billingAddress: "122 South 350 East Burley, ID 83318",
		phoneNumber: 2086500116,
		password: 987654321,
		active: true
	});

jason.save(function(err){
	if(err){
		console.log(err);
		next(err);
	} else {
		console.log('jason was saved');
		next();
	}
})
};

exports.down = function(next){
  next();
};
