import React from 'react';
import './Program.css';
import program_1 from '../../assets/program-1.avif'
import program_2 from '../../assets/program-2.avif'
import program_3 from '../../assets/program-3jpg.jpg'

const Program = () => {
  return (
      <div className='programs'>
          <div className="program">
              <img src={program_1} alt="gradute1" />

          </div>
          <div className="program">
              <img src={program_3} alt="gradute3" />
          </div>
          <div className="program">
              <img src={program_2} alt="gradute2" />
          </div>
          
      
    </div>
  )
}

export default Program
