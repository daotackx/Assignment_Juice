import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/products');
    } else if(username === 'user' && password === 'user'){
        navigate('/');
    }else{
      setError('Invalid username or password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '77vh' }}>
      <div className="col-lg-6">
        <h2 className="text-center mb-4">Login</h2>
        {error && <p className="alert alert-danger">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group className="mt-2">
            <Button type="submit" className="btn-danger form-control">
              Login
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
