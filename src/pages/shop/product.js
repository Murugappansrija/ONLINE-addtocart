import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage,madeby  } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{madeby }</p>
        <p> {price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add  {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};