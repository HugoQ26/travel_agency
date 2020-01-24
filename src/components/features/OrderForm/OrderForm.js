import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

import pricing from '../../../data/pricing.json';

const OrderForm = ({tripCost, options, setOrderOption, tripDays}) => {
  
  console.log('options', options);
  console.log('options', tripCost);

  const pricingMap = (pricing) => {
    return (
      pricing.map(option => {
        return (
          <Col key={option.id} md={4} >
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
          </Col>
        );
      })
    );
  };  

  const sendOrder = (options, tripCost) => {
    const totalCost = formatPrice(calculateTotal(tripCost, options));
  
    const payload = {
      ...options,
      totalCost,
    };
  
    const url = settings.db.url + '/' + settings.db.endpoint.orders;
  
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
  
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  };

  return (
    <Grid>
      <Row>
        {pricingMap(pricing)}
        <Col xs={12}>          
          <OrderSummary tripCost={tripCost} options={options} tripDays={tripDays}/>
          <Button onClick={() => sendOrder(options, tripCost)}>Order now!</Button>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDays: PropTypes.number,
};

export default OrderForm;