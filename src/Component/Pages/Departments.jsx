import React from 'react'
import '../Assets/Department.css'
import { NavLink } from "react-router-dom";
import card from "../Static/cardiology.png";
import s2 from "../Static/s2.png";
import s3 from "../Static/s3.png";
import s4 from "../Static/s4.png";
const Departments = () => {
    return (
        <div>
            {/* Our Department Section */}
            <div className="container departments">
                <div className="department">
                    <h2>OUR DEPARTMENT</h2>
                    <p>
                        Challenges are obstacles, but they cannot stop the enjoyment of
                        accusations and complaints
                    </p>
                </div>
                <div className="d-flex justify-content-between cards">
                    {/* Cardiology */}
                    <div className="card design" style={{ width: "18rem" }}>
                        <div className="image">
                            <img src={card} className="card-img-top" alt="Cardiology" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-uppercase">Cardiology</h4>
                            <p className="card-text">
                                Cardiology is the branch of medicine that deals with the
                                diagnosis and treatment of heart and cardiovascular system
                                disorders.
                            </p>
                        </div>
                    </div>

                    {/* Diagnosis */}
                    <div className="card design" style={{ width: "18rem" }}>
                        <div className="image diasonis">
                            <img src={s2} className="card-img-top dia" alt="Diagnosis" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-uppercase">Diagnosis</h4>
                            <p className="card-text">
                                Diagnosis is the process of identifying a disease or condition
                                based on its signs, symptoms, and medical tests.
                            </p>
                        </div>
                    </div>

                    {/* Surgery */}
                    <div className="card design" style={{ width: "18rem" }}>
                        <div className="image">
                            <img src={s3} className="card-img-top" alt="Surgery" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-uppercase">Surgery</h4>
                            <p className="card-text">
                                Surgery is a medical procedure involving the manual or
                                instrumental intervention to treat diseases, injuries, or
                                deformities.
                            </p>
                        </div>
                    </div>

                    {/* First Aid */}
                    <div className="card design" style={{ width: "18rem" }}>
                        <div className="image">
                            <img src={s4} className="card-img-top" alt="First Aid" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-uppercase">First Aid</h4>
                            <p className="card-text">
                                First aid is the immediate care given to an injured or ill
                                person before professional medical help arrives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* View More Button */}
                <div className="viewmore readmore mt-5">
                    <NavLink to="/departments" className="text-light">
                        View All
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Departments
