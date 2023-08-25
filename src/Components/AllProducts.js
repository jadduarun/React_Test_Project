import React, { useEffect, useState } from "react";

function AllProducts({ cartProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((res) => {
        setProducts(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddCart(id) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        cartProduct.push(products[i]);
        console.log(cartProduct);
      }
    }
  }

  return (
    <div className="all-products">
      {products.map((product) => {
        return (
          <div className="product-list" key={product.id}>
            <div>
              <img src={product.image} height="150px" width="150px" />
            </div>
            <h6>{product.title}</h6>
            <h6>Price : ${product.price}</h6>
            <div>
              <button onClick={() => handleAddCart(product.id)}>
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;
