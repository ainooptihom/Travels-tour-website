import React, { useState } from 'react';

import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './booking.css';

const Booking = ({ tour, avgRating }) => {

  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId : '01',
    userEmail: 'example@gmail.com',
    fullname : '',
    phone: '',
    guestSize: 1,
    bookAt: '',
  })

  const handleChange = (e) => {
       setCredentials(prev => ({...prev, [e.target.id]:e.target.value}))
  }


  const serviceFee = 10;
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/thank-you');
    
  }

  return (
    <div className='booking'>
        <div className='booking_top d-flex align-items-center justify-content-between'>
            <h3>${price} <span> /Per Person </span></h3>
            <span className='tour_rating d-flex align-items-center'>
                <i class='ri-star-s-fill'></i>
                {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
        </div>

        {/*================= Booking Form Start =================== */}
        <div className='booking_form'>
            <h5>Information</h5>
            <Form className='booking_info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type='text' placeholder='Full Name' id='fullname' required onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type='text' placeholder='Phone' id='phone' required onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type='date' placeholder='Full Name' id='bookAt' required onChange={handleChange} />
                    <input type='number' placeholder='Full Name' id='guestSize' required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
         {/*================= Booking Form Start =================== */}
        {/*================= Booking Bottom =================*/} 
        <div className='booking_bottom'>
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>
                        ${price} <i class='ri-close-line'></i> 1 Person </h5>
                    <span>${price}</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0'>
                    <h5>Service Charge</h5>
                    <span>$10</span>
                </ListGroupItem>
                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totalAmount}</span>
                </ListGroupItem>
            </ListGroup>

            <Button  style={{backgroundColor: 'var(--secondary-color)', color : 'white', borderColor : 'var(--secondary-color)'}}
            className='w-100 mt-4'
            onClick={handleClick}>Book Now</Button>
        </div>
        
    </div>
  )
}

export default Booking