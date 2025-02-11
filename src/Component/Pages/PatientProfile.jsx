import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Admin.css'
const PatientProfile = ({ user, onLogout }) => {
    return (
        <div className='container mt-5 mb-5 pt-5 pb-5'>
            <h2>User Profile</h2>
            <div className="table-responsive">
    <table className="table table-bordered table-striped table-hover">
        <thead className="table">
            <tr>
                <th>Sr.No.</th>
                <th>Full Name</th>
                <th>Date</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {user.map((p, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{p.fname} {p.lname}</td>
                    <td>{p.date}</td>
                    <td>{p.contact}</td>
                    <td>{p.email}</td>
                    <td>{p.gender}</td>
                    <td>{p.address}</td>
                    <td>
                        <NavLink to={`/appointment/edit/${p.id}`}>
                            <button className="btn btn-primary btn-sm">Edit</button>
                        </NavLink>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

            <button className='btn btn-danger me-3' onClick={onLogout}>User Logout</button>

        </div>
    )
}

export default PatientProfile;