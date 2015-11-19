/**
 * Button componet
 * Only two attributes / properties are required, which are these:
 * @ onClick
 * @ label
 **/

import React, { PropTypes, Component } from 'react';
import styles from './Button.css';

class Button extends Component {
  render () {
    return (
      <div className="Button-container">
        <button {...this.props} className="Button" ref="button" key="button">
          {this.props.label}
        </button>
      </div>
    );
  }
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Button;
