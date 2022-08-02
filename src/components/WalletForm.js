import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    const { currencies } = this.props;
    return (
      <div className="walletForm">
        <form>
          <label htmlFor="valor">
            Valor
            <input
              type="text"
              id="valor"
              data-testid="value-input"
            />
          </label>

          <label htmlFor="despesa">
            Despesa
            <input
              type="text"
              id="despesa"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="moeda">
            Moeda
            <select
              id="moeda"
              data-testid="currency-input"
            >
              {
                currencies.map((currencie, index) => (
                  <option key={ index } value={ currencie }>{currencie}</option>
                ))
              }
            </select>
          </label>

          <label htmlFor="pagamento">
            Método de pagamento
            <select
              id="pagamento"
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>

          <label htmlFor="categoria">
            Categoria
            <select
              id="categoria"
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
