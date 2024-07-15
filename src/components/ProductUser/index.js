// src/components/Products.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveProductsAction } from '../../actions/products-actions';
import ProductCard from './ProductCard';
import './ProductCard.css';// Thay đổi đường dẫn tùy theo cấu trúc thư mục của bạn

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
  
    useEffect(() => {
      dispatch(retrieveProductsAction());
    }, [dispatch]);
  
    return (
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div key={product.id} className="col-md-3 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      );
  }

export default ProductList;
