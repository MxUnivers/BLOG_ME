
import  React from "react";
import  Navbar from "../components/Navbar";
import  InfoAbout from "../components/About/InfoAbout";
import  InfoArticle from "../components/About/InfoArticle";

function AboutUs(){
    return(
        <div >
             <img  src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg" className="fixed right-0 top-0 z-2 w-full h-full "/>
             <Navbar/>
             <InfoAbout/>
             <InfoArticle/>
        </div>
    )
}

export default AboutUs ;