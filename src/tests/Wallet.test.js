import React from 'react';
import { screen } from '@testing-library/react';
import {renderWithRouterAndRedux } from "./helpers/renderWith"
import userEvent from "@testing-library/user-event";
import Wallet from '../pages/Wallet';

describe('Testes acerca da página de \'Wallet\'', () => {

  test('Verifica se existe o texto \'Adicione sua despesa abaixo\'', () => {
    renderWithRouterAndRedux(<Wallet />);
    const h3 = screen.getByRole('heading', {name:/Adicione sua despesa abaixo/i});
    expect(h3).toBeInTheDocument();
  });

  test('Deve existir um campo para inserir o valor da despesa', () => {
    renderWithRouterAndRedux(<Wallet />);
    const value = screen.getByTestId("value-input");
    userEvent.type(value, '250');
    expect(value).toHaveValue(250);
  });

  test('Deve existir um campo para inserir a descrição da despesa', () => {
    renderWithRouterAndRedux(<Wallet />);
    const description = screen.getByTestId("description-input");
    userEvent.type(description, 'Teclado');
    expect(description).toHaveValue('Teclado');
  });

  test('Deve existir um botão \'Adicionar despesa\'', () => {
    renderWithRouterAndRedux(<Wallet />);
    const buttonAddExpense = screen.getByTestId("button-add-expense");
    expect(buttonAddExpense).toBeInTheDocument();
  });

  test('Deve existir um campo para selecionar uma moeda', () => {
    renderWithRouterAndRedux(<Wallet />);
    const currency = screen.getByTestId("currency-input");
    expect(currency).toBeInTheDocument();
  });

  test('Verifica se o componente \'Header\' renderiza na tela', () => {
    renderWithRouterAndRedux(<Wallet />);
    const linkHeader = screen.getByRole("banner");
    expect(linkHeader).toHaveClass('header');
  });

  test('Verifica se o valor total de despesas aparece no cabeçalho da página', () => {
    renderWithRouterAndRedux(<Wallet />);
    const expenseTotal = screen.getByTestId('total-field');
    expect(expenseTotal).toHaveTextContent(/0.00/i);
  });

  test('A moeda selecionada inicialmente deve ser a USD', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const currency = await screen.findByText("USD");
    expect(currency).toBeVisible();
  });

  test('Verifica se há uma tabela na página', () => {
    renderWithRouterAndRedux(<Wallet />);
    const table = screen.getByTestId('table');
    expect(table).toBeInTheDocument();
  });

  test('Verifica se o campo \'Moeda\' recebe o valor correto', async () => {
    renderWithRouterAndRedux(<Wallet />);
    const buttonAddExpense = screen.getByRole('button', {name: /Adicionar despesa/i});
    userEvent.click(buttonAddExpense);
    const currency = await screen.findByText("Dólar Americano/Real Brasileiro");
    expect(currency).toBeVisible();
  });

});