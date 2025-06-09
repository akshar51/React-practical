import React, { useEffect, useState } from 'react'
import { getProducts } from '../api';
import ProductCard from './ProductCard'

const ProductList = () => {

  const [product,setProduct] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProduct(res.data));
  }, []);
  
  return (
    <>
    <div className="container my-5">
      <div className="row">
        {product.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProductList
