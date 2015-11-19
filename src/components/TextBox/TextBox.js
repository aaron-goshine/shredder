/**
 * TextBox componet
 * Only two attributes / properties are required, which are these:
 * @ rows
 * @ onChange
 **/

import React, { PropTypes, Component } from 'react';
import styles from './TextBox.css';

class TextBox extends Component {
  render () {
    return (
      <div className="TextBox">
          <textarea {...this.props} className="TextBox-input" ref="input" key="input"/>
          <p>This field accept a minimum of 5 words, a maximum of 500 words</p>
      </div>
    );
  }
}
TextBox.propTypes = {
  rows: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextBox;
