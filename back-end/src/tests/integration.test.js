const chai = require('chai');
const sinon = require('sinon');
const app = require('../api/app');

const chaiHttp = require('chai-http');
const { getConnection } = require('./connectionMock');
const { MongoClient } = require('mongodb');
chai.use(chaiHttp);

const { expect } = chai;

describe('POST /register', () => {
  describe('Quando Email e password não são informados', () => {
    let response;

    before(async() => {
      response = await chai.request(app).post('/register').send({})
    })

    it('retorna o código de status 400', () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('o objeto de resposta tem a proproedade "message"', () => {
      expect(response.body).to.have.a.property('message');
    });

    it('a propriedade "message" possui a mensagem adequada', () => {
      expect(response.body.message).to.be.equal('Dados inválidos');
    });
  });

  describe('Quando o usuário já possui cadastro no banco', () => {
    let connectionMock;
    let response;

    before(async () => {
      connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      await connectionMock.db('CodigoFontChallenge').collection('users')
        .insertOne({ email: "flavio_php@hotmail.com", password: "12345678" });

      response = await chai.request(app)
        .post('/register')
        .send({ email: "flavio_php@hotmail.com", password: "12345678" });
    });

    after(async () => {
      MongoClient.connect.restore();
      await connectionMock.db('CodigoFontChallenge').collection('users')
        .deleteOne({ email: 'flavio_php@hotmail.com' })
    });

    it('retorna o código de status 409', () => {
      expect(response).to.have.status(409);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('o objeto de resposta tem a proproedade "message"', () => {
      expect(response.body).to.have.a.property('message');
    });

    it('a propriedade "message" possui a msg de erro adequada', () => {
      expect(response.body.message).to.be.equal('User already exist')
    });
  });

  describe('quando o usuário é cadastrado com sucesso', () => {
    let connectionMock;
    let response;

    before(async () => {
      connectionMock = await getConnection();
      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      response = await chai.request(app)
        .post('/register')
        .send({ email: "fran@gmail.com", password: "10203033" });
    });

    after(() => {
      MongoClient.connect.restore();
    });

    it('retorna o código de status 201', () => {
      expect(response).to.have.status(201);
    });

    it('retorna um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('o objeto de resposta tem a propriedade "token"', () => {
      expect(response.body).to.have.a.property('token');
    });
  });
});
