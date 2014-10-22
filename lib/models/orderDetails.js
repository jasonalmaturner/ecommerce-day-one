var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = mongoose.Schema.Types.ObjectId;


var OrderDetails = new Schema({
	order: { type: ObjectId, ref: 'order' },
	
})