import React from 'react';
import LoginPage from '../pages/LoginPage';
import renderWithRouter from './RenderWithRouter';

describe('Teste da login Page', () => {
  it('Testa se contem a label "Email Address" e "Password".', () => {
    const { getByLabelText } = renderWithRouter(<LoginPage />);
    expect(getByLabelText('Email address')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('Testa se contem os botoes de login e register .', () => {
    const { getByText } = renderWithRouter(<LoginPage />);
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
  });
});

