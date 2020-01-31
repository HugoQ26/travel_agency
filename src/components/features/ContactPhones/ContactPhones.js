import React from 'react';

import styles from './ContactPhones.scss';
import Icon from '../../common/Icon/Icon';

const ContactPhones = () => {

  return (
    <div className={styles.contact}>
      <Icon name='phone' /><span>678.243.8455</span>
    </div>
  );
};

export default ContactPhones;