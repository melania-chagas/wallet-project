import React from 'react';
import Login from "../pages/Login"
import { screen } from '@testing-library/react';
import {renderWithRouterAndRedux } from "./helpers/renderWith"
import userEvent from "@testing-library/user-event";
import App from '../App';

describe('Testes acerca da página de \'Login\'', () => {

  test('O caminho desta url deve ser /', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { location: { pathname }} = history;
    expect(pathname).toBe('/');
  });

  test('Deve existir um ícone na tela ', () => {
    renderWithRouterAndRedux(<Login />);
    const walletIcon = screen.getByTestId('wallet-icon');
    expect(walletIcon).toBeInTheDocument();
  });

  test('Deve existir um campo de email', () => {
    renderWithRouterAndRedux(<input />);
    userEvent.type(screen.getByRole('textbox'), 'example@example.com');
    expect(screen.getByRole('textbox')).toHaveValue('example@example.com');
  });

  test('Deve existir um campo de senha', () => {
    renderWithRouterAndRedux(<input />);
    userEvent.type(screen.getByRole('textbox'), '123456');
    expect(screen.getByRole('textbox')).toHaveValue('123456');
  });

  test('Deve existir um botão com o texto \'Entrar\' ', () => {
    renderWithRouterAndRedux(<Login />);
    const buttonLogin = screen.getByText('Entrar');
    expect(buttonLogin).toBeInTheDocument();
  });

  test('Verifica se o botão \'Entrar\' está desabilitado', () => {
    renderWithRouterAndRedux(<Login />);
    const buttonLogin = screen.getByText('Entrar');
    expect(buttonLogin).toBeDisabled();
  });

    test(
    'Após preenchidos corretamente os campos de input o botão \'Entrar\' deverá estar habilitado ',
    () => {
    renderWithRouterAndRedux(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputEmail, 'example@example.com');
    userEvent.type(inputPassword, '123456');
    const buttonLogin = screen.getByRole('button', {name: 'Entrar'});
    expect(buttonLogin).toBeEnabled();
  });
});