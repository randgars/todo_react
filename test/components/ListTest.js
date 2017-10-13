import React from 'react';
import { shallow } from 'enzyme';
import List from 'components\List.js';

describe('<List />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<List />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "list-component"', function () {
      expect(component.hasClass('list-component')).to.equal(true);
    });
  });
});
