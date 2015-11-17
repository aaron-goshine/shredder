
import React, { PropTypes, Component } from 'react';
import styles from './TextBox.css';

class TextBox extends Component {
  static propTypes = {
    rows: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div className="TextBox">
          <textarea {...this.props} className="TextBox-input" ref="input" key="input"/>
      </div>
    );
  }

}

export default TextBox;
