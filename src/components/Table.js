import React, { Component } from 'react';
import './table.css';

export default class Table extends Component {
  render() {
    return (
      <div className="table">
        <table>
          <thead>
            <th className="description"> Descrição </th>
            <th className="tag"> Tag </th>
            <th className="method"> Método de pagamento </th>
            <th className="value"> Valor </th>
            <th className="currency"> Moeda </th>
            <th className="exchange"> Câmbio utilizado </th>
            <th className="convertedValue"> Valor convertido </th>
            <th className="conversionCurrency"> Moeda de conversão </th>
            <th className="edit/delete"> Editar/Excluir </th>
          </thead>
        </table>
      </div>
    );
  }
}
