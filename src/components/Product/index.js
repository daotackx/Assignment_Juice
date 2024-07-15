import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { deleteProductAction, retrieveProductEdit } from '../../actions/products-actions';
import './index.css';

const Product = ({ name, price, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmDeleteProduct = (id) => {
    // ask the user for confirmation
    Swal.fire({
      title: 'Are you sure you want to delete the product?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#62a086',
      cancelButtonColor: '#f66b61',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  // function that redirects programmatically, better than Link
  const redirectionEdition = (product) => {
    dispatch(retrieveProductEdit(product));
    navigate(`/products/edit/${id}`);
  };

  return (
    <tr>
      {/* <td>{name}</td>
      <td className='prices'>{price} $</td> */}
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          onClick={() => redirectionEdition({ name, price, id })}
        >
          Edit
        </button>
        <button
          className='button button--delete'
          type='button'
          onClick={() => confirmDeleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Product;
