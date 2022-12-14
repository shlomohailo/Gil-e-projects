const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubCategorySchema = new Schema({
    nameSubCategory: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }

)

module.exports = mongoose.model('SubCategory', SubCategorySchema);