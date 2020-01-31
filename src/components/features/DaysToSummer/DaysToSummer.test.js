import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const trueDate = Date;

const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (date, time, expectedDescription) => {
  it(`should show correct at ${date} ${time}`, () => {
    global.Date = mockDate(`${date}T${time}.135Z`);
    
    const component = shallow(<DaysToSummer/>);
    const renderedTime = component.find('.daysToSummer').text();
    expect(renderedTime).toEqual(expectedDescription);
    
    global.Date = trueDate;
  });

  it('should render div with daysToSummer class', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.find('.daysToSummer')).toBeTruthy();
  });
};


describe('DaysToSummer component', ()=>{

  it('should render without crashing', ()=>{
    const component = shallow(<DaysToSummer/>);
    expect(component).toBeTruthy();
  });
});

describe('Component DaysToSummer with mocked Date', () => {  
  checkDescriptionAtTime('2020-06-11', '11:57:58', '10 days to Summer!');
  checkDescriptionAtTime('2020-06-20', '21:50:00', '2 hours to Summer!');
  checkDescriptionAtTime('2020-06-21', '00:00:01', 'Enjoy the summer!');
  checkDescriptionAtTime('2020-09-22', '23:59:59', 'Enjoy the summer!');
  checkDescriptionAtTime('2020-09-23', '00:00:01', '270 days to Summer!');
  checkDescriptionAtTime('2020-12-01', '00:00:00', '201 days to Summer!');
});