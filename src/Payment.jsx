import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to='/checkout'>{basket.length} items)</Link>
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payemnt-address">
            <p>{user?.email}</p>
            <p>40 Haldhar Mahato colony</p>
            <p>Mango, Jamshedpur</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review item and Delivery</h3>
          </div>
          <div className="payment-item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payemnt-details"></div>
          <h3>Yet to be developed</h3>
        </div>
      </div>
    </div>
  );
};

export default Payment;
