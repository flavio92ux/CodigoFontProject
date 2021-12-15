import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import fetchLogin from '../services/fetchLogin';
import inputsVerification from '../utils/InputsVerification';

function LoginPage() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('flavio_php@hotmain.com');
  const [password, setPassword] = useState('12345678');
  const [invalidLogin, setInvalidLogin] = useState(false);

  useEffect(() => {
    setDisabled(!inputsVerification(email, password));
  }, [email, password]);

  const clearForm = () => {
    setEmail('');
    setPassword('');
    document.getElementById('email-form').setFocus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetchLogin(email, password);
    const { token, message } = data;

    if (message) setInvalidLogin(true);
    if (token) setInvalidLogin(false);

    localStorage.setItem('token', token);

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
          id="email-form"
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

      <Button
        variant="primary"
        type="submit"
        disabled={ disabled }
      >
        Login
      </Button>

      <Button variant="primary" type="button">
        Register
      </Button>
      { invalidLogin && <span>User does not exist</span> }
    </Form>
  );
}

export default LoginPage;
