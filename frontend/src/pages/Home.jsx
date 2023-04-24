import React from 'react'
import "../styles/home.css";

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  {/*=================HERO SECTION START================= */}
  <section>
  <Container>
    <Row>
      <Col lg='6'>
           <div className='hero_content'>
            <div className='hero_subtitle d-flex align-items-center'>
              <Subtitle subtitle={'Know Before You Go'} />
              <img src={worldImg} alt='' />
            </div>
            <h1>Traveling opens the door to creating 
              <span className="highlight">   memories</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam doloribus porro veniam unde eaque tempore odio, fugiat amet similique, quae modi. Unde voluptatem, harum debitis nobis ipsum laborum provident?</p>
           </div>
      </Col>

      <Col lg='2'> 
        <div className="hero_img-box">
          <img src={heroImg} alt='' />
        </div>
      </Col>

      <Col lg='2'> 
        <div className="hero_img-box mt-4">
          <video src={heroVideo} alt='' controls />
        </div>
      </Col>

      <Col lg='2'> 
        <div className="hero_img-box mt-5">
          <img src={heroImg02} alt='' />
        </div>
      </Col>
      <SearchBar />
    </Row>
  </Container>
  </section>
    {/*=================HERO SECTION END================= */}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='services_subtitle'> What we Serve </h5>
          <h2 className='services_title'>We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/*=====================Featured tour section Start======================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={"Explore"} />
            <h2 className='featured_tour-title'>Our Featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
  {/*=====================Featured tour section End======================*/}
   {/*=====================EXPERIENCED tour section Start======================*/}
   <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='experience_content'>
            <Subtitle subtitle={'Experience'} />

            <h2>
              With our all experience <br/> we will serve you
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam optio at nulla nam fugit animi officiis in vitae deserunt iste similique accusantium odio, deleniti voluptates error dolorum ipsa nihil harum
              <br/>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat dolorem deleniti quo eligendi, nobis reiciendis maxime corporis eius consectetur sit cum provident, natus inventore maiores rem excepturi fuga nam fugit.
            </p>
          </div>

          <div className='counter_wrapper d-flex align-items-center gap-5'>
            <div className='counter_box'>
              <span>12k+</span>
              <h6>Successful Trip</h6>
            </div>

            <div className='counter_box'>
              <span>2k+</span>
              <h6>Regular Client</h6>
          </div>

          <div className='counter_box'>
              <span>15</span>
              <h6>Years experience</h6>
          </div>

          </div>
        </Col>
        <Col lg='6'>
          <div className="experience_img">
            <img src={experienceImg} alt='experience-img' />
          </div>
        </Col>
      </Row>
    </Container>
   </section>
    {/*=====================EXPERIENCED tour section End======================*/}
    {/*=====================Gallery tour section Start======================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery_title'>Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
              <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    {/*=====================Gallery tour section End======================*/}
    {/*=====================Testimonal tour section Start======================*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className='testimonal_title'>What our fans say about us</h2>
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>

    {/*=====================Testimonal tour section End======================*/}
    <Newsletter />

  </>
}

export default Home