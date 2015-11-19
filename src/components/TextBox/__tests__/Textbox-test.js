jest.dontMock('../TextBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const TextBox = require('../TextBox');

describe('TextBox', () => {
  it('exist', () => {
    var Component = TestUtils.renderIntoDocument(
      <TextBox rows={1} onChange={() => {}} />
    );
    var componetNode = ReactDOM.findDOMNode(Component);
    expect(componetNode).toBeTruthy();
  });
});
