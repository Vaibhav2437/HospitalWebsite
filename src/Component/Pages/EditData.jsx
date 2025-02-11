import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {useNavigate, useParams } from 'react-router-dom';
import doctor from '../Static/doctosapp.webp'
const EditData = () => {
    const {userID} = useParams()
    const navigate = useNavigate();
    const {register,handleSubmit ,setValue, formState :{errors}} = useForm()

    const getData = async()=>{
        const result = await axios.get(`http://localhost:5000/patient/${userID}`)
        setValue('fname',result.data.fname)
        setValue('contact',result.data.contact)
        setValue('email',result.data.email)
        setValue('city',result.data.city)
        setValue('date',result.data.date)
        setValue('address',result.data.address)
        setValue('gender',result.data.gender)
        setValue('message',result.data.meffage)
        // console.log(setValue('faname',result.data.fname));
    }
    useEffect(()=>{
        getData();
    },[])

    const UpdateData =(data)=>{
        axios.put(`http://localhost:5000/patient/${userID}`,data)
        alert('Data Updated')
        navigate('/appointment')
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
                <form onSubmit={handleSubmit(UpdateData)}>
                <div className='container row detail mx-auto p-1'>
                    
                        <div className='col-6 p-0'>
                            <input type='text' className='form-control' placeholder='Enter Full Name' {...register('fname')}/>
                        </div>
                        <div className='col-6 p-0 ps-2'>
                            <input type='text' className='form-control' placeholder='Enter Number' {...register('contact')}/>
                        </div>
                        <div className='col-6 p-0 mt-3'>
                            <input type='text' className='form-control' placeholder='Email' {...register('email')}/>
                        </div>
                        <div className='col-6 p-0 mt-3 ps-2'>
                            <input type='text' className='form-control' placeholder='City' {...register('city')}/>
                        </div>
                        <div className="col-6 p-0 pt-3">
                            <input type='date' className='form-control' {...register('date')}/>
                        </div>
                        <div className="col-2 p-0 pt-3 ps-2">
                            <input type='radio' id='male' {...register('gender')}/>
                            <label for='male'>Male</label>
                        </div>
                        <div className="col-2 p-0 pt-3 ps-2">
                            <input type='radio' id='male' {...register('gender')}/>
                            <label for='male'>Female</label>
                        </div>
                        <div className="col-2 p-0 pt-3 ps-2">
                            <input type='radio' id='male' {...register('gender')}/>
                            <label for='male'>Other</label>
                        </div>
                        <div className="col-12 p-1 pt-3 ps-2">
                            <textarea className='form-control' placeholder='Enter Message Here' rows={6} {...register('message')}></textarea>
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

export default EditData
