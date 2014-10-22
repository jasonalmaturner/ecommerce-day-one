'use strict';

var CustomerService = require('../services/customer-service');

module.exports.get = function(req, res){
	CustomerService.getAllCustomers()
		.then(function(customers){
			res.json(customers);
		}).catch(function(err){
			res.statusCode(500).json(err);
		});
}

module.exports.post = function(req, res){
	CustomerService.saveCustomer(req.body)
		.then(function(product){
			res.json(customer[0]._id);
		}).catch(function(err){
			res.status(500).json(err);
		})
}

module.exports.put = function(req, res){
	if(!req.params.id){
		res.status(404).send();
	} else {
		CustomerService.saveCustomer(req.body)
			.then(function(product){
				res.send();
			}).catch(function(err){
				res.status(500).json(err);
			})
	}
}