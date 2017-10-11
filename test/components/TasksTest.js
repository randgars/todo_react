import React from 'react';
import { shallow } from 'enzyme';
import Tasks from 'components\Tasks.js';

describe('<Tasks />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<Tasks />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "tasks-component"', function () {
      expect(component.hasClass('tasks-component')).to.equal(true);
    });
  });
});
