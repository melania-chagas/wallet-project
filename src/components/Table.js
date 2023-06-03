import { Trash } from 'phosphor-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../redux/actions';
import './table.css';

class Table extends Component {
  handleClickBtnDelete = ({ target }) => {
    dispatchDeleteExpense(target);
  }

  render() {
    const { expenses } = this.props;
    return (
    // Como fazer uma tabela: https://www.w3schools.com/html/html_tables.asp
    // transforma para "Number" pois os valores vêm como string

      <div className="table">
        <table data-testid="table">
          <thead className="table-header">
            <tr>
              <th> Descrição </th>
              <th> Tag </th>
              <th> Método de pagamento </th>
              <th> Valor </th>
              <th> Moeda </th>
              <th> Câmbio utilizado </th>
              <th> Valor convertido </th>
              <th> Moeda de conversão </th>
              <th> Editar/Excluir </th>
            </tr>
          </thead>
          <tbody className="table-body">
            {
              expenses.map((expense) => (
                <tr key={ expense.id }>
                  <td>{ expense.description }</td>
                  <td>{ expense.tag }</td>
                  <td>{ expense.method }</td>
                  <td>{ Number(expense.value).toFixed(2) }</td>
                  <td>{ expense.exchangeRates[expense.currency].name }</td>
                  <td>
                    {
                      Number(expense.exchangeRates[expense.currency].ask).toFixed(2)
                    }
                  </td>
                  <td>
                    {
                      (Number(expense.value)
                      * Number(expense.exchangeRates[expense.currency].ask)).toFixed(2)
                    }
                  </td>
                  <td>BRL</td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ this.handleClickBtnDelete }
                  >
                    <Trash size={ 20 } />
                  </button>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchDeleteExpense: ({ target }) => dispatch(deleteExpense(target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
