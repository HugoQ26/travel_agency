import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';


const mapStateToProps = (state) => {   
  return {
    options: getOrderOptions(state),     
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    setOrderOption: (option) => dispatch(setOrderOption(option)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
