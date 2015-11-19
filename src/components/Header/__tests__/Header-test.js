jest.dontMock('../Header');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Header = require('../Header');

describe('Header', () => {
  it('exist', () => {
    var Component = TestUtils.renderIntoDocument(
      <Header />
    );
    var componetNode = ReactDOM.findDOMNode(Component);
    expect(componetNode).toBeTruthy();
  });
});
