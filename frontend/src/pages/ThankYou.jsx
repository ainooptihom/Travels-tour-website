import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../styles/thank-you.css';

const ThankYou = () => {
  return (
   <section>
    <Container>
        <Row>
            <Col lg='12'>
                <div className='thank_you'>
                    <span><i class='ri-checkbox-circle-line'></i></span>
                    <h1 className='mb-3 fw-semibold'>Thank You</h1>
                    <h3 className='mb-4'> Your tour is Booked.</h3>

                    <Button>
                        <Link to='/home'>
                            Back To Home
                        </Link>
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default ThankYou