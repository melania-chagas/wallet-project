import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import './wallet.css';
import { getCurrencies } from '../redux/actions';
import Header from '../components/Header';

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
    return (
      <div className="wallet">
        <Header />
        <WalletForm />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatchCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchCurrencies: (currencies) => dispatch(getCurrencies(currencies)),
});

export default connect(null, mapDispatchToProps)(Wallet);
