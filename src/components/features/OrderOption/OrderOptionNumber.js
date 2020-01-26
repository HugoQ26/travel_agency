import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionNumber = ({price, currentValue, setOptionValue, limits}) => {
    
  return (
    <div className={styles.number}>      
      <input className={[styles.input, styles.inputSmall].join(' ')} type="number" value={currentValue} min={limits.min} max={limits.max} onChange={event => setOptionValue(Number(event.currentTarget.value))}/> 
      <p>+ {price} price</p> 
    </div>);
};

OrderOptionNumber.propTypes = { 
  min:  PropTypes.number,
  max: PropTypes.number,
  limits: PropTypes.object,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionNumber;

