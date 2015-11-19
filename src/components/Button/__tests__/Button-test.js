jest.dontMock('../Button');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

const Button = require('../Button');

describe('Button', () => {
  it('exist', () => {
    var Component = TestUtils.renderIntoDocument(
      <Button  onClick={() => {}} />
    );
    var componetNode = ReactDOM.findDOMNode(Component);
    expect(componetNode).toBeTruthy();
  });
});
