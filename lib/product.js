var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Product = new Schema({
	name: { type: String, require: true, uniqueness: true, lowercase: true },
	description: { type: String, lowercase: true },
	price: { type: Number, min: 0, precision: 2, require: true },
	active: { type: Boolean, default: true }
})

module.exports = mongoose.model('Product', Product);