import React, { useState, useMemo } from 'react';

export default function B7() {
  const ProductItem = React.memo(({ product }) => {
    return (
      <div>
        <h3>{product.productName}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.quantity}</p>
      </div>
    );
  });

  const ProductList = () => {
    const [products, setProducts] = useState([
      { id: 1, productName: 'Product 1', price: 100, quantity: 10 },
      { id: 2, productName: 'Product 2', price: 150, quantity: 15 },
      { id: 3, productName: 'Product 3', price: 200, quantity: 20 },
    ]);

    const productList = useMemo(() => {
      return products.map(product => (
        <ProductItem key={product.id} product={product} />
      ));
    }, [products]);

    return (
      <div>
        <h2>Product List</h2>
        {productList}
      </div>
    );
  };

  return <ProductList />;
}