var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var product = require('./shared/product');

// var Product = new Schema({
// 	name: { type: String, require: true, uniqueness: true, lowercase: true },
// 	description: { type: String, lowercase: true },
// 	price: { type: Number, min: 0, precision: 2, require: true },
// 	active: { type: Boolean, default: true }
// })

var Product = new Schema(product);

module.exports = mongoose.model('Product', Product);