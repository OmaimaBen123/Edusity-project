import React ,{ useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import Program from './Components/Programs/Program';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';




const App = () => {

  const [playState, setPlaySet] = useState(false);

  return (
    <div>
      
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Programs' title ='What we offer'/>
        <Program />
        <About  setPlaySet={setPlaySet}/>
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says' />

        <Testimonial />
        <Title subTitle='Contact Us ' title='Get in Touch' />
        <Contact />
        <Footer/>
      </div>
      <VideoPlayer playState={ playState} setPlaySet={setPlaySet} />
    </div>
  )
}

export default App
