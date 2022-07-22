import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export const Contactform = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_arbtsmo', 'template_bninia6', form.current, 'QLNob7MSnyhn4EYM3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      Swal.fire(
        'submitted',
        'we will get in touch with you shortly',
        'success'
      )
      document.getElementById("form").reset();

  };
 

  return (
    <form ref={form} id="form" onSubmit={sendEmail}>
      <div className='container mb-3'>
      <div className='row m-1 pt-3'>
     <div className='col-6 ssd'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9138337962218!2d77.54839911378922!3d12.913259419652114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa0b03be94f%3A0x6e3d152c5457dd55!2sDazzling%20event%20management%20and%20digital%20studio!5e0!3m2!1sen!2sin!4v1657911113651!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> 
     <div className='col-6 st'><div className="form-group">
     <label for="exampleInputEmail1 m1">First Name</label>
 <input type="text" className="form-control m-1" name="user_name" placeholder="" required />
  </div>
  <div className="form-group">
  <label for="exampleInputEmail1 m1">Last Name</label>
   <input type="text" className="form-control m-1" name="user_lname" placeholder="" required />
  </div>
  <div className="form-group">
  <label for="exampleInputEmail1 m1">Email</label>
 <input type="email" className="form-control m-1" name="user_email"  placeholder="" required />
  </div> <div className="form-group">
  <label for="exampleInputEmail1 m1">Number</label>
  <input type="integer" className="form-control m-1"  name="user_number" placeholder="" required />
  </div>
  <div className="form-group">
  <label for="exampleInputEmail1 m1">Message</label>
  <textarea rows="3" className="form-control m-1"  name="user_message" placeholder="" required />
  </div> 
   <button type="submit" value="Send" className="btn po btn-primary ">Submit</button>
</div>
  </div>
   </div></form>
  );
};