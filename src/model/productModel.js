const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        features: { type: [String], required: true },
        name: { type: String, required: true },
        category: { type: String, required: true },
        rating: { type: Number, required: true },
        reviews: { type: Number, required: true },
        original_price: { type: Number, required: true },
        discount: { type: Number, required: true },
        isAvailable: { type: Boolean, required: true },
        image: { type: [String], required: true },
        color: { type: [String], required: true },
    },

    // {
    //     id: { type: Number },
    //     features: [],
    //     name: { type: String },
    //     category: { type: String },
    //     rating: { type: Number },
    //     reviews: { type: Number },
    //     original_price: { type: Number },
    //     discount: { type: Number },
    //     isAvailable: { type: Boolean },
    //     image: [],
    //     color: [],
    // },
    {
        versionKey: false,
    }
);

const Product = mongoose.model("products", productSchema);
module.exports = Product;
