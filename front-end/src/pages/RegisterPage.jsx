import React, { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import fetchLogin from '../services/fetchLoginAndRegister';
import inputsVerification from '../utils/InputsVerification';

function RegisterPage() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (password === passwordConf) {
      setDisabled(!inputsVerification(email, password));
    }
  }, [email, password, passwordConf]);

  const emailInput = useRef(null);

  const clearForm = () => {
    setEmail('');
    setPassword('');
    emailInput.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetchLogin(email, password, 'register');
    const { token, message } = data;

    if (message) setInvalidLogin(message);

    if (token) {
      setInvalidLogin(false);
      localStorage.setItem('token', token);
      navigate('/products');
    }

    clearForm();
  };

  return (
    <Form
      className="mx-auto"
      style={ { width: 400 } }
      onSubmit={ handleSubmit }
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={ emailInput }
          type="email"
          placeholder="Enter email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password Confirmation"
          value={ passwordConf }
          onChange={ (e) => setPasswordConf(e.target.value) }
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        disabled={ disabled }
      >
        Register
      </Button>

      { invalidLogin && <span>{ invalidLogin }</span> }
    </Form>
  );
}

export default RegisterPage;
