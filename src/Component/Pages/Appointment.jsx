import React from 'react'
import '../Assets/Appointment.css'
import doctor from '../Static/doctosapp.webp'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Appointment = () => {
    const { register, handleSubmit, reset } = useForm()

    const addData = (data) => {
        axios.post('http://localhost:5000/patient', data)
        alert('Data Submitted !!!')
        reset()
    }
    return (
        <div className='container appoin'>
            <div className='mb-4'>
                <h2 className='text-uppercase text-start touch'>Get in Touch</h2>
            </div>
            <div className="appoint p-0 d-flex ">

                <div className='row appointmentimg'>
                    <img src={doctor} />
                </div>
                <form onSubmit={handleSubmit(addData)}>
                    <div className='container row detail mx-auto p-1'>

                        <div className='col-6 p-0'>
                            <input type='text' className='form-control' placeholder='Enter Full Name' {...register('fname')} />
                        </div>
                        <div className='col-6 p-0 ps-2'>
                            <input type='text' className='form-control' placeholder='Enter Number' {...register('contact')} />
                        </div>
                        <div className='col-6 p-0 mt-3'>
                            <input type='text' className='form-control' placeholder='Email' {...register('email')} />
                        </div>
                        <div className='col-6 p-0 mt-3 ps-2'>
                            <input type='text' className='form-control' placeholder='City' {...register('city')} />
                        </div>
                        <div className="col-6 p-0 pt-3">
                            <input type='date' className='form-control' {...register('date')} />
                        </div>
                        <div className="col-2 p-0 pt-3 ps-2">
                            <input type="radio" id="male" value="male" {...register("gender")} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className="col-2 p-0 pt-3 ps-2">
                            <input type="radio" id="female" value="female" {...register("gender")} />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="col-2 p-0 pt-3 ps-2">
                            <input type="radio" id="other" value="other" {...register("gender")} />
                            <label htmlFor="other">Other</label>
                        </div>

                        <div className="col-12 pt-3 p-0">
                            <textarea className='form-control' placeholder='Enter Message Here' rows={5} {...register('message')}></textarea>
                        </div>

                        <div className="col-12 p-0 pt-3">
                            <button type='submit' className='sendbutton form-control'>Book Appointment</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Appointment
