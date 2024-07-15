import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewProductAction } from '../../actions/products-actions';
import { showAlert, hideAlertAction } from '../../actions/alert-actions';
import { useNavigate } from 'react-router-dom';
import './index.css';

const NewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // access the store state
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  const alert = useSelector(state => state.alert.alert);

  // use dispatch to execute actions
  const addProduct = product => dispatch(createNewProductAction(product));

  const submitNewProduct = async event => {
    event.preventDefault();

    // validate form
    if (name.trim() === '' || price <= 0 || image.trim() === '') {
      const alert = {
        msg: 'All fields are required.'
      };
      dispatch(showAlert(alert));
      return;
    }

    // if no errors
    dispatch(hideAlertAction());

    // create new product
    await addProduct({
      name,
      price,
      image
    });

    // redirect to main component
    navigate('/products');
  };

  const goBack = () => {
    navigate('/products');
  };

  return (
    <div>
      <h2 className='table__title'>New product</h2>
      <form className='form' onSubmit={submitNewProduct}>
        <section className='form__section'>
          <label>Product name</label>
          <input
            type='text'
            placeholder='Product name'
            name='name'
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </section>
        <section className='form__section'>
          <label>Product price</label>
          <input
            type='number'
            name='price'
            min='0'
            value={price}
            onChange={event => setPrice(Number(event.target.value))}
          />
        </section>
        <section className='form__section'>
          <label>Product image URL</label>
          <input
            type='text'
            placeholder='Image URL'
            name='image'
            value={image}
            onChange={event => setImage(event.target.value)}
          />
        </section>
        <div className='button__container'>
          <button
            type='button'
            className='button button--cancel'
            onClick={goBack}
          >
            Cancel
          </button>
          <button className='button button--confirm'>Confirm</button>
        </div>
        {alert ? <p className='alert-message'>{alert.msg}</p> : null}
      </form>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Ups! An error occurred.</p> : null}
    </div>
  );
};

export default NewProduct;
