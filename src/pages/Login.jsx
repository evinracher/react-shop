import React, { useRef } from 'react';
import logo from '@logos/logo_yard_sale.svg';
import '../styles/Login.scss';

const Login = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    };
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" className="form" ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="email" className="label">Email address</label>
          <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
          <label htmlFor="password" className="label">Password</label>
          <input type="password" name="password" placeholder="*********" className="input input-password" />
          <button type="submit" className="primary-button login-button">Log In</button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button sign-up-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;