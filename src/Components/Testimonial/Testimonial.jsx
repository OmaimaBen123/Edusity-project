import React, { useRef} from 'react';
import './Testimonial.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user_1.avif';
import user_2 from '../../assets/user_2.avif';
import user_3 from '../../assets/user_3.avif';
import user_4 from '../../assets/user_4.avif';

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward =() => {
        if (tx < 50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
       if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;  
    }

  return (
      <div className='testimonials'>
          <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
          <img src={back_icon} alt="" className='back-btn'onClick={slideBackward} />
          <div className="slider">
              <ul ref={slider}>
                  <li>
                      <div className="slide">
                          <div className="user-info">
                              <img src={user_1} alt="" />
                              <div>
                                  <h3>William Jackson</h3>
                                  <span>Edusity,USA</span>

                              </div>
                          </div>
                          <p>Choosing to pursue my degree at Edusity was one of the 
                              best decisions I've ever made. The supportive
                              community , state-of-the-art facilities,and commitment
                              to academic excellence have truly exceeded my 
                              expectations.
                          </p>
                      </div>
                  </li>
                   <li>
                      <div className="slide">
  <div className="user-info">
    <img src={user_2} alt="Student Photo" />
    <div>
      <h3>Sophia Thompson</h3>
      <span>Global University, UK</span>
    </div>
  </div>
  <p>Enrolling at Global University has been an incredible experience. The diverse community, cutting-edge resources, and the dedication of the faculty to student success have greatly enhanced my personal and academic growth. I couldn’t have asked for a better environment to pursue my studies.</p>
</div>

                  </li>
                   <li>
                      <div className="slide">
  <div className="user-info">
    <img src={user_3} alt="Student Photo" />
    <div>
      <h3>Emily Carter</h3>
      <span>Innovation University, Canada</span>
    </div>
  </div>
  <p>Innovation University has provided me with the perfect blend of academic challenges and practical experiences. The support from professors and access to real-world projects have equipped me with the skills and confidence I need to excel in my field. It’s truly a place where students thrive.</p>
</div>

                  </li>
                   <li>
                      <div className="slide">
  <div className="user-info">
    <img src={user_4} alt="Student Photo" />
    <div>
      <h3>Lucas Martinez</h3>
      <span>TechVision Academy, Australia</span>
    </div>
  </div>
  <p>At TechVision Academy, I’ve found a passion for learning and innovation that I never knew I had. The collaborative environment, advanced technology, and forward-thinking curriculum have given me the tools to not only succeed academically but to also grow personally and professionally.</p>
</div>

                  </li>
              </ul>
          </div>
    </div>
  )
}

export default Testimonial
