import React from 'react'
import Footer from '../components/Footer'
import Articles from '../components/Home/Articles'
import ImageSlider from '../components/Home/ImageSlider'
import NavItem from "../components/Home/NavItem";
import  Services from  "../components/Home/Services";

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <ImageSlider/>
      <NavItem/>
      <Articles Legend = {"Les plus populaires"}/>
      <Articles Legend = {"Reccement publiés"}/>
      <Services Title={"Services supplémentaires"}/>
      <Footer/>
    </div>
  )
}

export default Home
