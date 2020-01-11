import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';




const OrderOptionDate = ({setOptionValue, currentValue}) => {
    
    
  const handleChange = (date) => {
    console.log(date);
    setOptionValue(`${date.toLocaleDateString()}`);
  };
    
    
  return (
    <div >  
      <DatePicker  
        placeholderText="Click to select a date"
        dateFormat="yyyy/MM/dd"    
        onChange={date => handleChange(date)}
        value={currentValue}
      />
      {/* <input type="date" onChange={} value={currentValue}/> */}
    </div>
  );};

OrderOptionDate.propTypes = {  
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionDate;

