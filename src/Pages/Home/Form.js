import React from 'react';
import appointment from '../../assets/images/appointment.png'
import MainButton from '../Shared/MainButton';

const Form = () => {
  return (
    <section
            style={{
                background: `url(${appointment})`
            }}
            className='py-10'>
            <div className='text-center'>
                <h3 className='text-xl text-nutral font-bold mt-5'>Contact Us</h3>
                <h2 className='lg:text-4xl text-3xl text-white'>Stay Connected with Us</h2>
            </div>

            <div className="form-control lg:w-1/3 w-4/5 mx-auto mt-10">
                <input type="text" placeholder="Email Address" className="input input-bordered" />
                <input type="text" placeholder="Subject" className="input input-bordered my-5" />
                <textarea className="textarea textarea-bordered" placeholder="Your nessage"></textarea>
                <div className='mx-auto my-5'>
                    <MainButton>Submit</MainButton>
                </div>
            </div>
        </section>
        
  );
};

export default Form;