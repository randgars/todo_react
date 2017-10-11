import React from 'react';
import { shallow } from 'enzyme';
import HomeComponent from 'components\HomeComponent.js';

describe('<HomeComponent />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<HomeComponent />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "homecomponent-component"', function () {
      expect(component.hasClass('homecomponent-component')).to.equal(true);
    });
  });
});
