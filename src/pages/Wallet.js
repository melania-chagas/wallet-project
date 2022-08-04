import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import WalletForm from '../components/WalletForm';
import './wallet.css';
import { getCurrencies } from '../redux/actions';
import Header from '../components/Header';
import getAllCurrencies from '../services/api';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatchCurrencies } = this.props;
    const rawData = await getAllCurrencies();
    let keys = Object.keys(rawData);
    keys = keys.filter((currencie) => currencie !== 'USDT');
    dispatchCurrencies(keys);
  }
  // É possível substituir a função acima por esta (obtém-se o mesmo resultado):
  // componentDidMount() {
  //   getAllCurrencies().then((data) => dispatchCurrencies(data));
  // }

  render() {
    return (
      <div className="wallet">
        <Header />
        <h3>Adicione sua despesa abaixo</h3>
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
