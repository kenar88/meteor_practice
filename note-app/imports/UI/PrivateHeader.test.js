import { Meteor } from 'meteor/meteor';
import React from 'react';

import expect from 'expect';
import { mount } from 'enzyme';

import PrivateHeader  from './PrivateHeader';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
  describe('PrivateHeader', function () {
    it('should set button text to logout', function () {
      const wrapper = mount( <PrivateHeader header="test" onLogout={() => {}} /> );

      const butText = wrapper.find('h1').text();

      expect(butText).toBe('test');
    });

    it('should use title prop as h1 text', function () {
      const wrapper = mount(<PrivateHeader header='test-title' onLogout={() => {}}/>);
      const value = wrapper.find('a').text();

      expect(value).toBe('Logout');
    });

    it('should call the function', function () {
      const spy = expect.createSpy();
      spy(1);
      spy('asd');
      expect(spy).toHaveBeenCalledWith(1);
    });

    it('should call logout on click', function () {
      const spy = expect.createSpy();
      const wrapper = mount(<PrivateHeader title='test' onLogout={spy} />);

      wrapper.find('a').simulate('click');
      expect(spy).toHaveBeenCalled();
    });
  });
}