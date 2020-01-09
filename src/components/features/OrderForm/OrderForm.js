import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';



const OrderForm = ({tripCost, options}) => {
  
  console.log(pricing);

  const pricingMap = (pricing) => {
    return (
      pricing.map(option => {
        return (
          <Col key={option.id} md={4} >
            <OrderOption {...option}/>
          </Col>
        );
      })
    );
  };
  

  return (
    <Grid>
      <Row>
        {pricingMap(pricing)}
        <Col xs={12}>          
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};




export default OrderForm;