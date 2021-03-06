import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ParseCurrency from '../utils/parseCurrencyToBRL';

function OrderCardAdm({ orderInfo, index }) {
  const {
    id,
    delivery_address: house,
    delivery_number: numberHouse,
    total_price: totalPrice,
    status,
  } = orderInfo;

  const history = useHistory();

  return (
    <button
      type="button"
      onClick={ () => history.push(`/admin/orders/${id}`) }
      className="card-order-adm"
    >
      <div>
        <p className="order-number" data-testid={ `${index}-order-number` }>

          {`Pedido ${id}`}
        </p>
        <p className="shipping-adress" data-testid={ `${index}-order-address` }>

          {`${house}, ${numberHouse}`}
        </p>
      </div>
      <div className="price-status">
        <div
          data-testid={ `${index}-order-total-value` }
        >
          {ParseCurrency(totalPrice)}
        </div>
        <div data-testid={ `${index}-order-status` }>{status}</div>
      </div>
    </button>

  );
}

OrderCardAdm.propTypes = {
  orderInfo: {
    id: PropTypes.number,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    totalPrice: PropTypes.string,
    status: PropTypes.string,
  }.isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderCardAdm;
