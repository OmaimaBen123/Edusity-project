import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery_1.jpg';
import gallery_2 from '../../assets/gallery_2.avif';
import gallery_3 from '../../assets/gallery_3.jpg';
import gallery_4 from '../../assets/gallery_4.avif';

const Campus = () => {
  return (
    <div className='campus' id='campus'>
          <div className="gallery">
              <img src={gallery_1} alt="" />
              <img src={gallery_2} alt="" />
              <img src={gallery_3} alt="" />
              <img src={gallery_4} alt="" />
          </div> 
          <button className='btn dark-btn'>See more here </button>
    </div>
  )
}

export default Campus
