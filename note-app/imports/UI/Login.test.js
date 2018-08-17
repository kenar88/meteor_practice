import { Meteor } from 'meteor/meteor';
import React from 'react';

import expect from 'expect';
import { mount } from 'enzyme';

import Login  from './Login';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('LOGIN', function () {
    it('should show error message', function() {
      const error = 'some error';

      const wrapper = mount(<Login />);

      wrapper.setState({error});

      const value = wrapper.find('p').text();
      
      expect(value).toBe(error);
      wrapper.setState({error: ''});
      expect(wrapper.find('p').length).toBe(0);
      });
    });
  }

