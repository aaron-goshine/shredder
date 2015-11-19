jest.dontMock('../Footer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Footer = require('../Footer');

describe('Footer', () => {
  it('exist', () => {
    var Component = TestUtils.renderIntoDocument(
      <Footer />
    );
    var componetNode = ReactDOM.findDOMNode(Component);
    expect(componetNode).toBeTruthy();
  });
});
