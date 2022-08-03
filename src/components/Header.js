import { Wallet } from 'phosphor-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
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
        <h2 data-testid="total-field">{ `Despesa total:R$ ${0}`}</h2>
        <h2 data-testid="header-currency-field">BRL</h2>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
