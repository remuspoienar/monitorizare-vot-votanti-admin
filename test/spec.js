/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Footer from '../components/Footer/Footer';

describe('test suite', () => {

  /*it('test', () => {
    expect(true).to.be.equal.true;
  });*/

  it('Mount <Footer />', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find(Footer).to.have.lenght(3));
  });
});
