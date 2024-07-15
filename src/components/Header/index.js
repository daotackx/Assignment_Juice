import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logoutAction from '../../actions/authActions';
import './index.css';

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/login');
  };

  if (location.pathname === '/login') {
    return (
      <nav className='header'>
        <div>
          <h1 className='header__title'>Juice store</h1>
        </div>
      </nav>
    );
  }

  if (location.pathname.startsWith('/')) {
    return (
      <nav className='header'>
        <div>
          <h1 className='header__title'>Juice store</h1>
        </div>
        <button className='button button--logout' style={{ color: 'black' }} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    );
  }


  return (
    <nav className='header'>
      <div>
        <h1 className='header__title'>Juice store</h1>
      </div>
      <button className='button button--new'>
        <Link to={'/products/new'}>Add product</Link>
      </button>
      <button className='button button--logout' style={{ color: 'black' }} onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Header;
