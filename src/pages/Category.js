

import React from "react";
import Navbar from  "../components/Navbar";
import Footer from  "../components/Footer";
import  Social from "../components/Social";

import ArticleCart from  "../components/Category/ArticleCart";
import ListArticles from  "../components/Category/ListArticles";
import HeaderArticle from  "../components/Category/HeaderArticle";
import OtherArticles from  "../components/Category/OtherArticles";
import MessageEmail from  "../components/Category/MessageEmail";
import FooterCategory from "../components/Category/FooterCategory";
import NavItem from  "../components/Category/NavItem";



function Category() {
    return (
        <div>
            {/*  Barre de naviguation principale  */}
           <Navbar/>
           {/* SOCIAL ************* */}
           <Social/>
           <div className="bg-gray-100 font-sans leading-normal tracking-normal">

               {/* Background image Category */}
           <div className="w-full m-0 p-0 bg-cover bg-bottom" style={{backgroundImage:"url('https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: "60vh", maxHeight:"460px"}}>
               <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
                   <p className=" flex text-white font-extrabold text-3xl md:text-5xl">
                       <img src={"logo_Aymar.png"} className="h-10 w-10 rounded-2xl bg-white"/> Informatique
                   </p>
                   <p className="text-xl md:text-2xl text-gray-100">Bienvenue dans la rubrique informatique</p>
               </div>
           </div>
       
           
           <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
               <div className="mx-0 sm:mx-6">
                   {/* NavItem ( barre de navigation pour les item) */}
                   <NavItem/>

                   <div className="bg-gray-200 w-full text-xl md:text-2xl text-gray-800 leading-normal rounded-t">
       
                       {/* HeaderArticles les articles en vedettes */}
                       <HeaderArticle/>
                       {/* Listes des différents articles  suplémentaires */}
                        <ListArticles/>
                   
                   {/** MessageEmail pour l enoie de le email a admin */}
                      <MessageEmail/>
                   
       
       
                  
                   <div className="flex w-full items-center font-sans p-8 md:p-24">
                       <img className="w-10 h-10 rounded-full mr-4" src="http://i.pravatar.cc/300" alt="Avatar of Author"/>
                       <div className="flex-1">
                           <p className="text-base font-bold text-base md:text-xl leading-none">Ghostwind CSS</p>
                           <p className="text-gray-600 text-xs md:text-base">Tailwind CSS version of Ghost's Casper theme by <a href="#" className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindtoolbox.com">TailwindToolbox.com</a></p>
                       </div>
                       <div className="justify-end">
                           <button className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full">Read More</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       {/* Footer de la categorie de la page de category */}
        <FooterCategory/>
        {/* Footer de unique */}
           <Footer/>
    </div>
    </div>
    );
}

export default Category;
