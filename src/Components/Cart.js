import React, { useState } from 'react';
import './Cart.css';

const CartPage = () => {
  const [ak, setAk] = useState(1);
  const [products, setProducts] = useState([
    { id: 1, name: 'Nike air jordan', quantity: 0 },
    { id: 2, name: 'Puma pwrframe ', quantity: 0 },
    { id: 3, name: 'Puma bmw msport', quantity: 0 },
  ]);

  const handleIncrement = () => {
    setAk(ak + 1);
  };

  const handleDecrement = () => {
    if (ak > 0) {
      setAk(ak - 1);
    }
  };

  return (
    <div className="CartPage">
      <div className="container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <span>{product.name}</span>
            <div>
              <button onClick={handleIncrement}>+</button>
              <span className="quantity">{ak}</span>
              <button onClick={handleDecrement}>-</button>
            </div>
          </div>
        ))}
        <div className="total">Total: ${ak * products.reduce((acc, cur) => acc + cur.quantity, 0)}</div>
      </div>
    </div>
  );
};

export default CartPage;
