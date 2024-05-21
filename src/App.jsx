import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Programs from './Components/Programs/Programs.jsx'
import Title from './Components/Title/Title.jsx'
import About from './Components/About/About.jsx'
import Campus from './Components/Campus/Campus.jsx'
import Testimonials from './Components/Testimonials/Testimonials.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What we Offer'/>
       <Programs/>
       <About/>
       <Title subTitle='Gallery' title='Campus Photos'/>
       <Campus/>
       <Title subTitle='TESTIMONIALS' title='What Student Says'/>
       <Testimonials/>
       <Title subTitle='Contact Us' title='Get in touch'/>
       <Contact/>
       <Footer/>
      </div>
      
    </div>
  )
}

export default App
