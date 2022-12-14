const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    nameCategory: {
        type: String,
        required: true
    }
    , subCategory: [{
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    }]
},
    {
        timestamps: true
    }

)

module.exports = mongoose.model('Category', CategorySchema);