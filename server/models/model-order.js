const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    numberOrder: { type: Number },
    product: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    sum: { type: Number },
    qty: { type: Number },
    date: { Date }
},

    { timestamps: true }
)
module.exports = mongoose.model('Order', OrderSchema)