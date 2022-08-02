import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div className="wallet">
        <header className="header">
          <h1>
            Wallet
          </h1>
          <h2 data-testid="email-field">{email}</h2>
          <h2 data-testid="total-field">{ `Despesa total:R$ ${0}`}</h2>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});
export default connect(mapStateToProps)(Wallet);
