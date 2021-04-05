// describe('Component', () => {
//     it('should be true', () => {
//         const foo = true;
//         expect(foo).toBe(true);
//     })

//     it('shouldbe false', () => {
//         const foo = true
//         expect(foo).toBe(false)
//     })
// });
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Component from './Component'

Enzyme.configure({ adapter: new Adapter() })
 
describe('Component', () => {
   it('should show text', () => {
       const wrapper = shallow(<Component />)
       const text = wrapper.find('div div')
       expect(text.text()).toBe('Text goes here') 
   })
   it('shoukd hide text when button is clicked', () => {
       const wrapper = shallow(<Component />)
       const button = wrapper.find('button')
       button.simulate('click')
       const text = wrapper.find('div div')
       expect(text.length).toBe(0)
   })
});

