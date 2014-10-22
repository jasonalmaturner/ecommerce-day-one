'use strict';

var ProductService = require('../services/product-service');

module.exports.get =  function(req, res){
	ProductService.getAllProducts()
		.then(function(products){
			res.json(products);
		}).catch(function(err){
			res.statusCode(500).json(err);
		});
}

module.exports.post = function(req, res){
	ProductService.saveProduct(req.body)
		.then(function(product){
			res.json({id: product[0]._id});
		}).catch(function(err){
			res.status(500).json(err);
		})
}

module.exports.put = function(req, res){
	var id = req.params.id;
	if(!id){
		res.status(404).send();
	} else {
		ProductService.saveProduct(req.body, id)
			.then(function(product){
				res.send();
			}).catch(function(err){
				res.status(500).json(err);
			})		
	}
}