import React from 'react';
import styles from './Button.scss';
import PropTypes from 'prop-types';

const Button = ({variant = '', enableButton, ...otherProps}) => (
  <div className={styles.buttonWrapper}>
    <button
      {...otherProps}
      className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}
      disabled={enableButton}
    />
  </div>
);

Button.propTypes = {
  variant: PropTypes.string,
  enableButton: PropTypes.bool.isRequired,
};

export default Button;
