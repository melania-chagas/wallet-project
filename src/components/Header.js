import { Wallet } from 'phosphor-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  getTotal = () => {
    const { expenses } = this.props;
    let partial = 0;
    expenses.forEach((expense) => {
      partial += expense.value * expense.exchangeRates[expense.currency].ask;
    });
    return partial;
  }

  render() {
    const { email } = this.props;

    return (
      <header className="header">
        <Link
          to="/"
        >
          <Wallet size={ 37 } color="white" />
        </Link>
        <h2 data-testid="email-field">{email}</h2>
        <h2 data-testid="total-field">
          {
            `${this.getTotal().toFixed(2)}`
          }
        </h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({
    forEach: PropTypes.number,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
