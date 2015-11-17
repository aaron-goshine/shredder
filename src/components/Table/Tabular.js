import React, { PropTypes, Component } from 'react';
import styles from './Tabular.css';

class Tabular extends Component {
  getSortedCategories () {
    return Object.keys(this.props.model).sort();
  }

  generateMatrix () {
    let categories = this.getSortedCategories();
    let model = this.props.model;
    let lens = [];

    for (let i = 0; i < categories.length; i++) {
      let c = categories[i];
      lens.push(model[c].length);
    }

    let maxlen = Math.max.apply(null, lens);
    let matrix = [];
    for (let y = 0; y < maxlen; y++) {
      for (let x = 0; x < categories.length; x++) {
        let xi = categories[x];
        if (!matrix[y]) matrix[y] = [];
        let cellValue = model[xi][y] || '';
        matrix[y].push(cellValue);
      }
    }
    return matrix;
  }

  renderMatrix () {
    return this.generateMatrix().map((y, i) => {
      return (<tr key={i + 'y'}>{
        y.map((x, i) => {
          return (<td key={i + 'x'}>{x}</td>);
        })
      }</tr>);
    });
  }
  renderMatrixHeaders () {
    return this.getSortedCategories().map((cat) => {
      return (<th key={cat}> {cat} </th>);
    });
  }
  render () {
    this.generateMatrix();
    return (
      <div className="Tabular-container">
        <table className="Tabular">
          <thead>
            <tr>
              {this.renderMatrixHeaders()}
            </tr>
          </thead>
          <tbody>
            {this.renderMatrix()}
          </tbody>
        </table>
      </div>
    );
  }
}

Tabular.propTypes = {
  model: PropTypes.object.isRequired
};

export default Tabular;
