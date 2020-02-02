import React from 'react';
import { shallow } from 'enzyme';
import ContactPhones from './ContactPhones';


describe('ContactPhones component', ()=>{

  const component = shallow(<ContactPhones/>);

  it('should render without crashing', () => {
    expect(component).toBeTruthy();
  });

});