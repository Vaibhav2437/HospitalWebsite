import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container nav ps-4">
          <NavLink className="navbar-brand brand" to="/">ORTHOC
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse links" id="navbarNav">
            <ul className="navbar-nav links">
              <li className="nav-item lilink">
                <NavLink className="nav-link active text-light" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item lilink">
                <NavLink className="nav-link text-light" to="/appointment">Appointment</NavLink>
              </li>
              <li className="nav-item lilink">
                <NavLink className="nav-link text-light" to="/about">About</NavLink>
              </li>
              <li className="nav-item lilink">
                <NavLink className="nav-link text-light" to="/departments">Department</NavLink>
              </li>
              <li className="nav-item lilink">
                <NavLink className="nav-link text-light" to="/doctors">Doctors</NavLink>
              </li>
              <li className="nav-item lilink">
                <NavLink className="nav-link text-light" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item lilink">
                <NavLink className="nav-link text-light" to="/login">My Appointment</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
