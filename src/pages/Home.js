import React from 'react'
import Footer from '../components/Footer'
import Articles from '../components/Home/Articles'
import ImageSlider from '../components/Home/ImageSlider'
import NavItem from "../components/Home/NavItem";
import  Services from  "../components/Home/Services";
import Subscribe from '../components/Home/Subscribe';

import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      {/*ImageSlider pour enuérer les dernières article actu */}
      <ImageSlider/>
      {/*  L'indicateur de dommainer que vous voulez visté sur le blog  */}
      <NavItem/>
      {/*  les differrents articles mise en ligne sur la page d'accueil tel ques les nouveaux articleet ceux qui vount être publié */}
      <Articles Legend = {"Les plus populaires"}/>
      <Articles Legend = {"Reccement publiés"}/> 
      <Services />
      <Subscribe/>
      
      <Footer/>
    </div>
  )
}

export default Home
