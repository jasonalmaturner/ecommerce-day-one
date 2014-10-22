'use-strict';

var Product = require('../models/product'),
	Promise = require('bluebird');

Promise.promisifyAll(Product);
Promise.promisifyAll(Product.prototype);

module.exports.getAllProducts = function(){
	return Product.findAsync();
}

module.exports.saveProduct = function(product, id){
	if(id){
		return Product.findByIdAndUpdateAsync(id, product);
	} else {
		return new Product(product).saveAsync();
	}
}