import React from 'react'
import '../Assets/Contact.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
const Contact = () => {
    const { register, handleSubmit, reset } = useForm()

    const addData = (data) => {
        axios.post('http://localhost:9000/Contact', data)
        alert('Data Submitted !!!')
        reset()
    }
    return (
        <div className='container contacts'>
            <div>
                <h2 className='text-uppercase text-start'>Get in Touch</h2>
            </div>
            <form onSubmit={handleSubmit(addData)}>
            <div className=" contact p-0">
                
                <div className='row from p-1'>
               
                    <div className='col-6 p-0'>
                        <input type='text' className='form-control' placeholder='Enter Name' {...register('name')}/>
                    </div>
                    <div className='col-6 p-0 ps-2'>
                        <input type='tel' className='form-control' placeholder='Enter Number' {...register('number')} />
                    </div>
                    <div className='col-12 p-0 mt-3'>
                        <input type='email' className='form-control' placeholder='Email' {...register('email')}/>
                    </div>
                    <div className="col-12 p-0 pt-3">
                        <textarea className="form-control p-0" cols={20} rows={6} placeholder="Message" id="floatingTextarea2" {...register('message')}></textarea>
                    </div>
                    <div className="col-12 p-0 pt-3">
                        <button type='submit' className='sendbutton form-control'>Send</button>
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
            </form>
        </div>
    )
}

export default Contact
