import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {
    const {userID} = useParams()
    const navigate = useNavigate()
    const [user,setUser] = useState([])
    const getData = async()=>{
        const response = await axios.get(`http://localhost:5000/patient/${userID}`);
        const  result = response.data
        setUser(result)
    }

    useEffect(()=>{
        getData()
    },[])

    const deleteData =()=>{
        axios.delete(`http://localhost:5000/patient/${userID}`)
        alert('Data Deleted !!')
        navigate('/patientappointment')
    }
    return (
        <div className=''>
            <h2 className='text-centre w-100'>Delete User</h2>
            <div className=''>
                <h4>Patient Name - {user.fname}</h4>
            </div>
            <div>
                <h4>Patient Email - {user.email}</h4>
            </div>
            <div>
                <h4>PAtinet Contact - {user.contact}</h4>
            </div>
            <div className="mt-3">
                <button className='btn btn-danger me-3' onClick={deleteData}>Yes</button>
                <NavLink to='/patientappointment'>
                    <button className='btn btn-success'>No</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Delete;
