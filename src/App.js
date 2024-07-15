import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';
import LoginForm from './components/LoginForm/LoginForm';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
// import './App.css';
import ProductList from './components/ProductUser';
import Carousell from './components/carousels';
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Carousell/>
        <div className="container">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<ProductList />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<NewProduct />} />
            <Route path="/products/edit/:id" element={<EditProduct />} />
          </Routes>
        </div>
        <Footer/>
      </Provider>
    </Router>
  );
}

export default App;
