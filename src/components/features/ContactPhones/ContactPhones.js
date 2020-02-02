import React from 'react';

import styles from './ContactPhones.scss';
import Icon from '../../common/Icon/Icon';

const ContactPhones = () => {

  const phoneNumber = () => {
    const currentTime = new Date();
    
    if(currentTime.getUTCHours() >= 8 && currentTime.getUTCHours() < 12) {
      return 'Amanda, 678.243.8455';
    } else if (currentTime.getUTCHours() >= 12 && currentTime.getUTCHours() < 16) {
      return 'Tobias, 278.443.6443';
    } else if (currentTime.getUTCHours() >= 16 && currentTime.getUTCHours() < 22) {
      return 'Helena, 167.280.3970';
    }

    return 'The office opens at 8:00 UTC';
  };


  return (
    <div className={styles.contact}>
      <Icon name='phone' /><span>{phoneNumber()}</span>
    </div>
  );
};

export default ContactPhones;

// 8:00 - 12:00 - Amanda, 678.243.8455
// 12:00 - 16:00 - Tobias, 278.443.6443
// 16:00 - 22:00 - Helena, 167.280.3970