import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';

import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

// import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderSummary = ({tripCost, options}) => {

  console.log('tripcost', tripCost);
  console.log('options', options);
  

  const price = calculateTotal(formatPrice(tripCost), options);

  return <h2 className={styles.component}>Total: <strong>{price}</strong></h2>;
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};


export default OrderSummary;
