const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    nameProduct: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    category: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category'
        }],
    color: { type: String },
    hight: { type: String },
    length: { type: String },
    depth: { type: String },
    hight: { type: String },

},
    {
        timestamps: true
    }

)

module.exports = mongoose.model('Product', ProductSchema);