jest.mock('react-axe', () => jest.fn());

describe('reactAxe', () => {
  test('Execute react-axe in development', () => {
    process.env.NODE_ENV = 'development';
    jest.resetModules();
    const React = require('react');
    const ReactDOM = require('react-dom');
    const axe = require('react-axe');
    require('../../../../src/shared/a11y/reactAxe.js');
    expect(axe).toHaveBeenCalledTimes(1);
    expect(axe).toHaveBeenCalledWith(React, ReactDOM, 1000);
  });

  test('Do not execute react-axe in production', () => {
    process.env.NODE_ENV = 'production';
    jest.resetModules();
    const axe = require('react-axe');
    require('../../../../src/shared/a11y/reactAxe.js');
    expect(axe).not.toHaveBeenCalled();
  });
});
