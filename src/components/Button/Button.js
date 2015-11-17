
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
  onClick: PropTypes.func.isRequired
};

export default Button;
