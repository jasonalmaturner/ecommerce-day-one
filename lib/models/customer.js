var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var address = require('./shared/address'),
	phone = require('./shared/phone');

var Customer = new Schema({
	name: {
		first: { type: String, required: true },
		middle: { type: String },
		last: { type: String, required: true }
	},

	email: { type: String, require: true, lowercase: true, uniqueness: true },
	password: { type: String, require: true },

	addresses: [address],
	phones: [phone],

	active: { type: Boolean, default: true }

	// createdAt: { type: Date, required: true, default: },
	// updatedAt: { type: Date }

})

module.exports = mongoose.model('Customer', Customer)