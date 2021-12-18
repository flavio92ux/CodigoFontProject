import { getByTestId } from '@testing-library/react';
import React from 'react';
import RegisterPage from '../pages/RegisterPage';
import renderWithRouter from './RenderWithRouter';

describe('Teste da tela de registro de usuarios', () => {
  it('Testa se contem as labels "Email adress, password e confirm password.', () => {
    const { getByText } = renderWithRouter(<RegisterPage />);
    expect(getByText('Email address')).toBeInTheDocument();
    expect(getByText('Password')).toBeInTheDocument();
    expect(getByText('Confirm your password')).toBeInTheDocument();
  });

  it('Verifica se existem os botoes Register e Back.', () => {
    const { getByRole } = renderWithRouter(<RegisterPage />);
    const btnRegister = getByRole('button', { name: 'Register' });
    const btnBack = getByRole('button', { name: 'Back' });
    expect(btnRegister).toBeInTheDocument();
    expect(btnBack).toBeInTheDocument();
  });

  it('Verifica se  o preenchimento dos inputs habilita o botar de register.', () => {
    const { getByRole } = renderWithRouter(<RegisterPage />);
    const btnRegister = getByRole('button', { name: 'Register' });
  });



});

