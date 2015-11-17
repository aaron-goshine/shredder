
import React, { PropTypes, Component } from 'react';

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div className="Button">
          <button {...this.props} className="Button-input" ref="button" key="button"/>
      </div>
    );
  }

}

export default Button;
