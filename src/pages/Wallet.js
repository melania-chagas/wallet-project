import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import './wallet.css';
import { getCurrencies } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    this.getAllCurrencies();
  }

  getAllCurrencies = async () => {
    const { dispatchCurrencies } = this.props;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const arrayData = Object.keys(data);
    const filteredDataList = arrayData.filter((currencie) => currencie !== 'USDT');
    dispatchCurrencies(filteredDataList);
  }

  render() {
    const { email } = this.props;
    return (
      <div className="wallet">
        <header className="header">
          <h2>
            Wallet
          </h2>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">{ `Despesa total:R$ ${0}`}</h2>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(getCurrencies(currencies)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
