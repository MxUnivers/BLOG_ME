import React ,{useState , useEffect} from 'react'
import Footer from '../components/Footer'
import Articles from '../components/Home/Articles'
import ImageSlider from '../components/Home/ImageSlider'
import NavItem from "../components/Home/NavItem";
import  Services from  "../components/Home/Services";
import Subscribe from '../components/Home/Subscribe';
import ImageIntro from "../components/Home/ImageIntro";

// modal
import  ModalSubscribe from  "../Modal/ModalSubscribe" ;

import Navbar from '../components/Navbar'
import  Social from  "../components/Social";

const Home = () => {
  const  image1="https://images.pexels.com/photos/3761270/pexels-photo-3761270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const image2 = "https://images.pexels.com/photos/2837382/pexels-photo-2837382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [subscribe , setSubscribe] = useState(false) ;
  

  function ShowSbscribe(){
    setSubscribe(true);
  }
  function HideSuscribe(){
    setSubscribe(false)
  }
     

  return (
    <div>
      <Navbar/>
      {/*ImageSlider pour enuérer les dernières article actu */}
      <ImageSlider/>
      <ModalSubscribe subscribe={subscribe} HideSuscribe ={HideSuscribe} />
      {/** Social **** */}
      <Social ShowSbscribe = {ShowSbscribe}/>

      {/*  L'indicateur de dommainer que vous voulez visté sur le blog  */}
      <NavItem/>
      {/*  les differrents articles mise en ligne sur la page d'accueil tel ques les nouveaux articleet ceux qui vount être publié */}
      <Articles Legend = {"Les plus populaires"}/>
      <ImageIntro image ={image2}/>
      <Articles Legend = {"Reccement publiés"}/> 
      <Services />
      <Subscribe/>
      
      <Footer/>
    </div>
  )
}

export default Home
