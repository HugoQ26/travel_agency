import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import OptionRequired from './OptionRequired';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

const OrderOptionDate = ({setOptionValue, currentValue}) => {    
    
  const handleChange = (date) => {
    console.log(date);
    setOptionValue(`${date.toLocaleDateString()}`);
  };
        
  return (
    <div className={styles.date}>  

      {!currentValue && <OptionRequired text="*required"/>} 
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

