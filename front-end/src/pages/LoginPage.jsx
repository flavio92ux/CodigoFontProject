import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import inputsVerification from '../utils/InputsVerification';

function LoginPage() {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setDisabled(!inputsVerification(email, password));
  }, [email, password]);

  return (
    <Form className="mx-auto" style={ { width: 400 } }>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
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
    </Form>
  );
}

export default LoginPage;
