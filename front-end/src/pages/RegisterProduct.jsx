/* eslint-disable no-alert */
import React, { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import fetchImageProduct from '../services/fetchImageProduct';
import fetchProduct from '../services/fetchProduct';

function RegisterProduct() {
  const [cardFile, setCardFile] = useState();
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [idProduct, setIdProduct] = useState('');

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const productInput = useRef(null);

  const checkPriceAndAmount = () => (
    (Number(price) > 0 && Number(amount) > 0)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checkPriceAndAmount()) {
      alert('Price or quantity cannot be null');
      return;
    }

    const body = { productName, price, amount };

    const idProd = await fetchProduct(body, token);
    setIdProduct(idProd);
  };

  useEffect(() => {
    productInput.current.focus();
  }, []);

  useEffect(() => {
    if (!idProduct) return;
    const formData = new FormData();
    formData.append('image', cardFile[0]);
    if (!token) navigate('/');
    fetchImageProduct(idProduct, formData, token)
      .then(() => window.location.reload());
  }, [cardFile, idProduct, navigate, token]);

  const handleChangeInput = ({ target }) => {
    const { name, value } = target;

    const regex = /^\d*[0-9]\d*$/;

    if (!regex.test(Number(value))) return;

    if (name === 'price') setPrice(value);
    if (name === 'amount') setAmount(value);
  };

  return (
    <>
      <Header />
      <br />
      <Form
        className="mx-auto"
        style={ { width: 400 } }
        onSubmit={ handleSubmit }
      >
        <Form.Control
          ref={ productInput }
          type="text"
          placeholder="Product"
          value={ productName }
          required
          onChange={ (e) => setProductName(e.target.value) }
        />
        <br />
        <Form.Control
          type="text"
          placeholder="Price"
          name="price"
          required
          value={ price }
          onChange={ (e) => handleChangeInput(e) }
        />
        <br />
        <Form.Control
          type="text"
          placeholder="Quantity"
          name="amount"
          required
          value={ amount }
          onChange={ (e) => handleChangeInput(e) }
        />
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Default file input example</Form.Label>
          <Form.Control
            type="file"
            required
            accept="image/jpeg, image/png, image/jpg"
            onChange={ (e) => setCardFile(e.target.files) }
          />
        </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default RegisterProduct;
