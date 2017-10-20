import React from 'react';
import { shallow } from 'enzyme';
import Events from 'components\Events.js';

describe('<Events />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Events />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "events-component"', function () {
      expect(component.hasClass('events-component')).to.equal(true);
    });
  });
});
