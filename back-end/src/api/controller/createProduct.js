const createProductService = require('../service/createProduct');

module.exports = async (req, res) => {
    const {
        productName,
        price,
        stock,
        image } = req.body;

    const id = await createProductService({
        productName,
        price,
        stock,
        image });

    res.status(201).json({ id });
};