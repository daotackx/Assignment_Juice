import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveProductsAction } from '../../actions/products-actions';
import Product from '../Product';
import './index.css';

const Products = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    (async () => {
      await dispatch(retrieveProductsAction());
    })();
  }, []);

  let products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
      <div className="container">
        <h2 className='table__title'>Products</h2>
        {error ? <p>An error occurred</p> : null}
        {loading ? <p>Loading...</p> : null}
        <table className='table table-striped'>
          <thead className='thead-dark'>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Actions</th>
          </tr>
          </thead>
          <tbody>
          {products.length === 0 ? (
              <tr>
                <td colSpan="4">No products yet.</td>
              </tr>
          ) : (
              products.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <img src={product.image} alt={product.name} className='img-thumbnail product-image' onClick={() => openModal(product)} />
                    </td>
                    <td>
                      <Product
                          name={product.name}
                          price={product.price}
                          id={product.id}
                      />
                    </td>
                  </tr>
              ))
          )}
          </tbody>
        </table>

        {/* Modal */}
        {selectedProduct && (
            <div className="modal" style={{ display: 'block' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{selectedProduct.name} Details</h5>
                    <button type="button" className="close" onClick={closeModal}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <p><strong>Name:</strong> {selectedProduct.name}</p>
                    <p><strong>Price:</strong> ${selectedProduct.price}</p>
                    <img src={selectedProduct.image} alt={selectedProduct.name} className='img-fluid' />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}

export default Products;
