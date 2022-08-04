import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getExpenseAddition } from '../redux/actions';
import getAllCurrencies from '../services/api';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: 1,
    };
  }

  expenseAddition = async () => {
    const { dispatchExpenseAddition, expenses } = this.props;
    const rawData = await getAllCurrencies();
    this.setState({
      id: expenses.length,
      exchangeRates: rawData,
    },
    () => {
      dispatchExpenseAddition(this.state);
    });
    this.setState({
      value: '',
      description: '',
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div className="walletForm">
        <form>
          <label htmlFor="value">
            Valor
            <input
              type="number"
              id="value"
              data-testid="value-input"
              onChange={ this.handleChange }
              name="value"
              value={ value }
            />
          </label>

          <label htmlFor="description">
            Despesa
            <input
              type="text"
              id="description"
              data-testid="description-input"
              name="description"
              value={ description }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="currency">
            Moeda
            <select
              id="currency"
              data-testid="currency-input"
              name="currency"
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies.map((currencie, index) => (
                  <option key={ index } value={ currencie }>{currencie}</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="method">
            Método de pagamento
            <select
              id="method"
              data-testid="method-input"
              name="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="tag">
            Categoria
            <select
              id="tag"
              data-testid="tag-input"
              name="tag"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <div className="buttonAddExpense">
            <button
              type="button"
              onClick={ this.expenseAddition }
            >
              Adicionar despesa
            </button>
          </div>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatchExpenseAddition: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    length: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchExpenseAddition: (expense) => dispatch(getExpenseAddition(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
