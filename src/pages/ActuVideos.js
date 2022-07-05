import React from 'react'
import ActucHeader from '../components/ActuVideo/ActucHeader'
import ActuIntro from '../components/ActuVideo/ActuIntro'
import ListActu from '../components/ActuVideo/ListActu'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ActuVideos = () => {
  return (
    <div>
        <Navbar/>
           <section>
                <ActucHeader/>
                <ActuIntro/>
                <ListActu/>
            </section>        
        <Footer/>
    </div>
  )
}

export default ActuVideos