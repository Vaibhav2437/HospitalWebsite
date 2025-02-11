import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const PatientAppointment = () => {
    const [patient, setPatient] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/patient')
            setPatient(response.data)
        } catch (error) {
            console.error('Error fetching patient data:', error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container mt-5'>
            <h1>Patient Appointment</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Full Name</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Appointment Date</th>
                        <th>Gender</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {patient.map((p, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{p.fname}</td>
                            <td>{p.contact}</td>
                            <td>{p.email}</td>
                            <td>{p.city}</td>
                            <td>{p.date}</td>
                            <td>{p.gender}</td>
                            <td>{p.message}</td>
                            <td>
                                <NavLink to={`/appointment/edit/${p.id}`}>
                                    <button className='btn btn-danger me-2'>Edit</button>
                                </NavLink>
                                <NavLink to={`/appointemnt/delete/${p.id}`}>
                                    <button className='btn btn-success'>Delete</button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PatientAppointment
