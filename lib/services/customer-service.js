'use strict';

var Customer = require('../models/customer'),
	Promise = require('bluebird');

Promise.promisifyAll(Customer);
Promise.promisifyAll(Customer.prototype);

module.exports.getAllCustomers = function(){
	return Customer.findAsync();
}

module.exports.saveCustomer = function(customer){
	if(customer._id){
		return Customer.findByAndUpdateAsync(customer._id, customer);
	} else {
		return new Customer(customer).saveAsync();
	}
}