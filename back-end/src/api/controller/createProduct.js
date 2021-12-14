const createProductService = require('../service/createProduct');

module.exports = async (req, res) => {
    const {
        productName,
        price,
        amount,
        stock,
        image } = req.body;

    const productId = await createProductService({
        productName,
        price,
        amount,
        stock,
        image });

    res.status(201).json({ productId });
};