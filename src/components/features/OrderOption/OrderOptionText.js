import React from 'react';
import PropTypes from 'prop-types';

import OptionRequired from './OptionRequired';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue, currentValue}) => (

  <div className={styles.text}>
    {!currentValue && <OptionRequired text="*required"/>}  
    <input type="text" className={styles.input} onChange={event => setOptionValue(event.currentTarget.value)} value={currentValue} required/>
  </div>

);

OrderOptionText.propTypes = {  
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;

