const createProductModel = require('../model/createProduct');

module.exports = async (product) => {
    const id = await createProductModel(product);
    return id;
};
