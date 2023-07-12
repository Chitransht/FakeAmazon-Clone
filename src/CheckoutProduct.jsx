import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({id, image, title, price, rating}) => {
  const [{ basket }, dispatch] = useStateValue();
  const removebasket = () =>{
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id:id,
      })
  }


 
  return (
    <div className='checkoutProduct'>
    <img className='checkoutProduct-image' src={image} />

    <div className='checkoutProduct-info'>
        <p className='checkoutProduct-title'>{title}</p>
        <p className="checkoutProduct-price">
            <small>Rs. </small>
            <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <p>⭐</p>
            ))}
        </div>
        <button onClick={removebasket}>Remove From Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
