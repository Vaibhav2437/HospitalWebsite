import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PatientProfile from './PatientProfile'
import '../Assets/About.css'
const PatientLogin =() => {
    const [email, setEmail] = useState('')
    const [loggedIn, setLoggedIn] = useState([])

    const handleLogin = async() =>{
        const response = await axios.get('http://localhost:5000/patient')
        const result = response.data
    
        const stuLogin = result.filter((stu)=> stu.email === email)

        if(stuLogin.length > 0){
            setLoggedIn(stuLogin)
            alert('User Login Successfull')
            setEmail('')

        }else{
            alert('Login Fails')
            setEmail('')

        }
    }

    const handleLogout = () =>{
        setLoggedIn([])
        setEmail('')
    }

    if(loggedIn.length > 0){
        return <PatientProfile user={loggedIn} onLogout={handleLogout}/>
    }



  return (
    <div className='container mt-5 mb-5 pb-5 pt-5'>
        <div>
            <h1>My Appointment</h1>
        </div>
        <div className='row mx-auto p-3 rounded-3  mt-3'>
            <div className='col-6 mx-auto'>
                <input 
                    type='email'
                    className='form-control mb-3 p-3'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
           
            <div>
                <button className='btn btn-success me-3 ps-5 pe-5' onClick={handleLogin}>LOGIN</button>
                <NavLink to='/appointment'><button className='btn btn-danger'>NEW REGISTRATION</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default PatientLogin
