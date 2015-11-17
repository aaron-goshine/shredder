import React, { PropTypes, Component } from 'react';

class Tabular extends Component {
  static propTypes = {
    model: PropTypes.object.isRequired,
  };

  render() {
    return (
      <table className="Tabular">
        <tr>
          <th>A</th>
        </tr>
        <tr>
          <td>Aaron</td>
        </tr>
    </table>
    );
  }

}

export default Tabular;
