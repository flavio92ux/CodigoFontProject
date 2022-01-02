const mongoConnection = require('./src/api/model/connection');

const dataFake = [
    {
        productName: 'SuperMan',
        price: '99',
        amount: 9,
        image: 'http://localhost:3001/image/superman.jpeg',
    },
    {
        productName: 'Homem Aranha',
        price: '99',
        amount: 9,
        image: 'http://localhost:3001/image/spiderman.jpeg',
    },
    {
        productName: 'Mario',
        price: '99',
        amount: 9,
        image: 'http://localhost:3001/image/mario.jpeg',
    },
    {
        productName: 'Sonic',
        price: '99',
        amount: 9,
        image: 'http://localhost:3001/image/sonic.jpeg',
    },
    {
        productName: 'Gran turismo',
        price: '99',
        amount: 9,
        image: 'http://localhost:3001/image/granturismo.jpeg',
    },
];

mongoConnection.getConnection()
    .then((db) => db.collection('products').insertMany(dataFake));
