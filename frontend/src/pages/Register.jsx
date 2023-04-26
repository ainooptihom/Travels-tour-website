import React from 'react';

import '../styles/login.css';
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import { useState } from 'react';


const Register = () => {
  const [ credentials, setCredentials ] = useState({
    userName: undefined,
    email: undefined,
    password: undefined
  })

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(credentials);
  }
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login_container d-flex justify-content-between'>
              <div className='login_img'>
                <img src={registerImg} alt='' />
              </div>

              <div className='login_form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Register</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='text' placeholder='Enter UserName' required id='userName'  onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type='email' placeholder='Enter Email' required id='email' onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Enter Password' required id='password' onChange={handleChange} />
                  </FormGroup>

                  <Button className='auth_btn' type='submit'>Register</Button>
                </Form>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Register