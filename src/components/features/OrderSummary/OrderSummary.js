import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.scss';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

const OrderSummary = ({ tripCost, options, tripDays }) => {
  const price = calculateTotal(formatPrice(tripCost), options);
  const startTrip = options['start-date'];

  const endTrip = date => {
    let formatedDate = date
      .split('.')
      .reverse()
      .join('-');
    let calcEnd = new Date(formatedDate);
    calcEnd.setDate(calcEnd.getDate() + tripDays);
    return calcEnd.toLocaleDateString();
  };

  return (
    <div className={styles.component}>
      <h2>
        Total: <strong>{price}</strong>
      </h2>
      {startTrip && (
        <h3>
          Trip start: {startTrip}, trip ends: {endTrip(startTrip)}
        </h3>
      )}
    </div>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  tripDays: PropTypes.number,
};

export default OrderSummary;
