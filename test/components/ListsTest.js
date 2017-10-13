import React from 'react';
import { shallow } from 'enzyme';
import Lists from 'components\Lists.js';

describe('<Lists />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Lists />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "lists-component"', function () {
      expect(component.hasClass('lists-component')).to.equal(true);
    });
  });
});
