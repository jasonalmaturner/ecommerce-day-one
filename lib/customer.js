var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Customer = new Schema({
	name: { type: String, require: true, lowercase: true },
	email: { type: String, require: true },
	shippingAddress: { type: String, require: true, lowercase: true },
	billingAddress: { type: String, require: true, lowercase: true, default: this.billingAddress },
	phoneNumber: { type: Number },
	password: { type: String, require: true },
	active: { type: Boolean, default: true }
})

module.exports = mongoose.model('Customer', Customer)