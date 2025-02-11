import React from 'react'
import '../Assets/Doctors.css'
import doctor1 from '../Static/d1.jpg'
import doctor2 from '../Static/d2.jpg'
import doctor3 from '../Static/d3.jpg'
import { NavLink } from 'react-router-dom'
const Doctors = () => {
    return (
        <div className='doctorlist'>
            <div className='container dolists'>
                <div>
                    <h2 className=''>Our Doctors</h2>
                    <p>Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.</p>
                </div>
                <div className='d-flex justify-content-between mt-5'>
                    <div className="card" style={{width: "20rem;"}}>
                        <img src={doctor1} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Elina Josh</h5>
                                <p class="card-text"></p>
                            </div>
                    </div>
                    <div className="card" style={{width: "20rem;"}}>
                        <img src={doctor2} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Adam View</h5>
                                <p class="card-text"></p>
                            </div>
                    </div>
                    <div className="card" style={{width: "20rem;"}}>
                        <img src={doctor3} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Mia Mike</h5>
                                <p class="card-text"></p>
                            </div>
                    </div>
                </div>
                <div className=' doctor-list'>
                <NavLink>View All</NavLink>
                </div>
                        
            </div>
        </div>
    )
}

export default Doctors
