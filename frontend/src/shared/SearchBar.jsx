import React,{useRef} from 'react';

import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

const SearchBar = () => {

    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxPeopleSizeRef = useRef(0);
  
    const searchHandle = () => {
      const location = locationRef.current.value;
      const distance = distanceRef.current.value;
      const maxPeopleSize = maxPeopleSizeRef.current.value;
  
      if(location === '' || maxPeopleSize === '' || distance === '') {
        return alert('all fields are required');
      }
    }

  return (
    <Col lg='12'>
        <div className='search_bar'>
            <Form className='d-flex align-items-center gap-4'>
               <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder='Where are you going?' ref={locationRef} />
                </div>
               </FormGroup>
               <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type='text' placeholder='Distance k/m' ref={distanceRef} />
                </div>
               </FormGroup>
               <FormGroup className='d-flex gap-3 form_group form_group-last'>
                <span><i class="ri-group-line"></i></span>
                <div>
                    <h6>Max People</h6>
                    <input type='number' placeholder='0' ref={maxPeopleSizeRef} />
                </div>
               </FormGroup>

               {/*===========SEARCH BAR=========== */}
               <span className='search_icon' type='submit' onClick={searchHandle}>
                  <i class="ri-search-line"></i>
               </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar