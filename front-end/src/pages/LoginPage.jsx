import React, { useEffect, useRef, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import fetchLogin from '../services/fetchLoginAndRegister';
import inputsVerification from '../utils/InputsVerification';

function LoginPage() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidLogin, setInvalidLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setDisabled(!inputsVerification(email, password));
  }, [email, password]);

  const emailInput = useRef(null);

  const clearForm = () => {
    setEmail('');
    setPassword('');
    emailInput.current.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await fetchLogin(email, password, 'login');
    const { token, message } = data;

    if (message) setInvalidLogin(message);
    if (token) {
      setInvalidLogin(false);
      localStorage.setItem('token', token);
      navigate('/products');
    } else {
      clearForm();
    }
  };

  return (
    <Container className="loginContainer">
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

        <Container className="containerBtn">
          <Button
            variant="outline-success"
            type="submit"
            className="button"
            disabled={ disabled }
          >
            Login
          </Button>

          <Button
            variant="outline-success"
            className="button"
            type="button"
            onClick={ () => navigate('/register') }
          >
            Register
          </Button>
        </Container>
        { invalidLogin && <span>{ invalidLogin }</span> }
      </Form>
    </Container>
  );
}

export default LoginPage;
