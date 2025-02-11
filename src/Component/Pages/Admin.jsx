import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/Admin.css'
const Admin = () => {
  const [user, setUser] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const adminLogin = () => {
    if (user.name === 'ADMIN' && user.password === 'Admin@123') {
      alert('Admin Login Successfully');
      navigate('/patientappointment');
    } else {
      alert('Wrong Username & Password');
      setUser({ name: '', password: '' });
    }
  };

  return (
    <div className='back mx-auto'>
      <div className='mx-auto content'>
        <h1 className='text-dark admin text-center'>Admin Login</h1>
        <div className=''>
          <input
            type='text'
            className='form-control'
            placeholder='Enter Username'
            name='name'
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className=' mt-3'>
          <input
            type='password'
            className='form-control'
            placeholder='Enter Password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-success mt-5' onClick={adminLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Admin;
