var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = mongoose.Schema.Types.ObjectId;

// Connect customer db? - connect at Order.customer, Order.shippingAddress, Order.customer[.name?]

var calculator = function () {
	return (this.subtotal * this.salesTax) + this.subtotal;
};

var Order = new Schema({
	customer: { type: ObjectId, ref: 'customer' },
	shippingAddress: { type: String, require: true, lowercase: true },
	billingAddress: { type: String, require: true, lowercase: true/*, default: this.shippingAddress*/ },
	paymentInformation: { 
		cardType: { type: String, require: true, lowercase: true, enum: ['visa', 'mastercard', 'american express', 'discover']},
		cardNumber: { type: Number, require: true, min: 16, max: 16 },
		ccv: { type: Number, min: 3, max: 4, require: true },
		nameOnCard: { type: String, require: true, lowercase: true/*, default: Order.customer*/ },
		expirationDate: {
			month: { type: Number, require: true },
			year: { type: Number, require: true }
		}
	},
	subtotal: { type: Number, require: true },
	salesTax: { type: Number, default: 0.07 },
	total: { type: Number, set: calculator },
	products: [{
		product: { type: ObjectId, ref: 'product', require: true },
		quantity: { type: Number, require: true, min: 0, default: 1 },
		price: { type: Number, require: true, min: 0 }
	}]
})

module.exports = mongoose.model('Order', Order);