jest.dontMock('../Tabular');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Tabular = require('../Tabular');

let mockModel = {
  'A': ['Aaron', 'Abracadabra'],
  'B': ['Big', 'Bass']
};

describe('Tabular', () => {
  it('exist', () => {
    // Render a table
    var table = TestUtils.renderIntoDocument(
      <Tabular model={mockModel} />
    );
    var tabelNode = ReactDOM.findDOMNode(table);
    expect(tabelNode).toBeTruthy();
  });
});
