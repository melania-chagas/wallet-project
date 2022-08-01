import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import getUserEmail from '../redux/actions/index';
import './login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      password: '',
      isButtonDisabled: true,
    };
  }

  userDataValidation = () => {
    const { userEmail, password } = this.state;
    const minimumCharacterValue = 5;
    // regex email: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const regexEmail = /\S+@\S+\.\S+/;
    const validationPassword = password.length >= minimumCharacterValue;
    const validationEmail = regexEmail.test(userEmail);
    if ((validationEmail && validationPassword)) {
      this.setState({
        isButtonDisabled: false,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.userDataValidation();
  };

  handleClick = () => {
    const { userEmail } = this.state;
    const { history, dispatchUserEmail } = this.props;
    dispatchUserEmail(userEmail);
    history.push('/carteira');
  };

  render() {
    const { isButtonDisabled, userEmail, password } = this.state;
    return (

      <form className="form">
        <div className="inputs">
          <input
            type="email"
            data-testid="email-input"
            placeholder="Digite seu email"
            name="userEmail"
            value={ userEmail }
            onChange={ this.handleChange }
          />
          <input
            type="password"
            minLength="6"
            placeholder="senha 6 dígitos"
            data-testid="password-input"
            onChange={ this.handleChange }
            name="password"
            value={ password }

          />
          <div className="divButton">
            <button
              type="submit"
              disabled={ isButtonDisabled }
              onClick={ this.handleClick }
              className="button"
            >
              Entrar
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserEmail: (email) => dispatch(getUserEmail(email)),
});

Login.propTypes = {
  dispatchUserEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
