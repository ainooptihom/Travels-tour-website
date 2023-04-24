import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

import './newsletter.css';

const Newsletter = () => {
  return (
    <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter_content'>
                    <h2> Subscribe now to get useful traveling information</h2>

                    <div className='newsletter_input'>
                        <input type='email' placeholder='Enter your email address' />
                        <button className='btn newsletter_btn'>Subscribe</button>  
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolore corporis eveniet, veritatis nulla doloremque, vel explicabo tempora fuga, voluptates est ab. Iste praesentium, illum maiores dolores accusantium asperiores amet quia quae obcaecati cupiditate id ratione! Dolore obcaecati atque nobis numquam porro illum deserunt alias.</p>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter_img'>
                    <img src={maleTourist} alt='' />
                </div>
            </Col>
        </Row>
    </Container>
    </section>
  )
}

export default Newsletter