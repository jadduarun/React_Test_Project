import React from "react";

function Cart({ cartProduct }) {
  let totalPrice = 0;
  return (
    <div>
      {cartProduct.map((product) => {
        return (
          <div className="cart" key={product.id}>
            <div>
              <img src={product.image} height="150px" width="150px" />
            </div>
            <h4>{product.title}</h4>
            <h3>${product.price}</h3>
            <p>{totalPrice += product.price}</p>
          </div>
        );
      })}
      {cartProduct.length > 0 ? <h3 className="total">Total : ${totalPrice}</h3> : ""}
    </div>
  );
}

export default Cart;
