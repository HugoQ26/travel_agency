import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOptions = ({name, type, id, setOrderOption , ...otherProps}) => {

  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps} setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};

OrderOptions.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  setOrderOption: PropTypes.func,
};

export default OrderOptions;

