import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OptionRequired = ({text}) => (
  <p className={styles.required}>{text}</p>
);

OptionRequired.propTypes = {
  text: PropTypes.string.isRequired,
};



export default OptionRequired;