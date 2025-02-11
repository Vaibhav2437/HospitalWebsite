import React from "react";
import "../Assets/Home.css";
import { NavLink } from "react-router-dom";
import card from "../Static/cardiology.png";
import s2 from "../Static/s2.png";
import s3 from "../Static/s3.png";
import s4 from "../Static/s4.png";
import aboutimg from "../Static/about-img.jpg";
import banner from '../Static/hero-bg.png'
import doctor1 from '../Static/d1.jpg'
import doctor2 from '../Static/d2.jpg'
import doctor3 from '../Static/d3.jpg'
const Home = () => {
  return (
    <div className="">
      <div className="">
        <div className="position-relative banner">
          <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active c-item">
                <img src={banner} class="d-block w-100 c-img" alt="Slide 1" />
                <div class="carousel-caption text-start mt-5 top-0">
                  <h2 class="display-1">We Provide Best Healthcare</h2>
                  <p className="healthcontent">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                  <button class=" fs-6 read">Read More</button>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
              {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
              {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          {/* Our Department Section */}
          <div className="container">
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

          About Section
          <div className="container mb-5 pb-5">
            <div className="d-flex about">
              <div className="aboutimg">
                <img src={aboutimg} alt="About Us" />
              </div>
              <div className="about-cont">
                <h3 className="text-uppercase">About Us</h3>
                <p>
                  Welcome to [Hospital Name], a trusted name in healthcare
                  committed to providing exceptional medical services with
                  compassion and expertise. Our state-of-the-art facility is
                  equipped with advanced technology and staffed by a team of
                  highly skilled doctors, nurses, and healthcare professionals
                  dedicated to delivering personalized care. From emergency
                  services to specialized treatments, we strive to ensure the
                  well-being and recovery of every patient. At [Hospital Name],
                  your health and comfort are our top priorities, and we are here
                  to support you at every step of your journey to wellness.
                </p>
                <div className="readmore aboutmore mt-5">
                  <NavLink to="/about" className="text-light">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='doctorlist'>
            <div className='container dolists'>
              <div>
                <h2 className=''>Our Doctors</h2>
                <p>Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.</p>
              </div>
              <div className='d-flex justify-content-between mt-5'>
                <div className="card" style={{ width: "20rem;" }}>
                  <img src={doctor1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Elina Josh</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
                <div className="card" style={{ width: "20rem;" }}>
                  <img src={doctor2} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Adam View</h5>
                    <p class="card-text"></p>
                  </div>
                </div>
                <div className="card" style={{ width: "20rem;" }}>
                  <img src={doctor3} class="card-img-top" alt="..." />
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
          <div className='container contacts'>
            <div>
              <h2 className='text-uppercase text-start'>Get in Touch</h2>
            </div>
            <div className=" contact p-0">
              <div className='row from p-1'>
                <div className='col-6 p-0'>
                  <input type='text' className='form-control' placeholder='Enter Name' />
                </div>
                <div className='col-6 p-0 ps-2'>
                  <input type='text' className='form-control' placeholder='Enter Number' />
                </div>
                <div className='col-12 p-0 mt-3'>
                  <input type='text' className='form-control' placeholder='Email' />
                </div>
                <div className="col-12 p-0 pt-3">
                  <textarea className="form-control p-0" cols={20} rows={6} placeholder="Message" id="floatingTextarea2"></textarea>
                </div>
                <div className="col-12 p-0 pt-3">
                  <button className='sendbutton form-control'>Send</button>
                </div>
              </div>
              <div className='row map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1512.1215413650023!2d-74.005973!3d40.712665!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fda88cefb3%3A0x7f1e88758d210007!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1738249539722!5m2!1sen!2sus"
                  width="50%"  // Use percentage to make it responsive
                  // style={{ border: "0", maxWidth: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
