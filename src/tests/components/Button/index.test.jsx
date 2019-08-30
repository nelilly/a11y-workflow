import React from 'react';
import {shallow, mount} from 'enzyme';
import ReactDOMServer from 'react-dom/server';
// import {axe} from '../../../jest-config/axe-config';
import {axe, toHaveNoViolations} from 'jest-axe';
expect.extend(toHaveNoViolations);

import {Button} from '../../../../src/components/Button/index.jsx';

describe('Button Tests', function() {
  test('Button Snapshop', () => {
    const wrapper = shallow(
      <Button />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Expect no AXE violations', async () => {
    const wrapper = mount(
      <Button />
    );
    expect(await axe(ReactDOMServer.renderToString(wrapper))).toHaveNoViolations();
  });
});
