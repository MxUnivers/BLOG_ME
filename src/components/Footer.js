

import React from "react";
import {BsFacebook} from  "react-icons/bs"
import {AiFillInstagram} from  "react-icons/ai";
import  {IoLogoWhatsapp} from  "react-icons/io"


// listes de items de catégories et Services
const categories = [ 
    { id : 1 , Items:"Informatique" }, { id : 2 , Items:"Santé" }, { id:3 , Items:"Animation"},
    { id : 4 , Items:"Voyage" }, { id : 5 , Items:"Pensées" }, { id:6 , Items:"developpement"},
    { id : 7 , Items:"nature" }, { id : 8 , Items:"travail" }, { id:9 , Items:"technologie"},
]
const services =[
    { id : 1 , Items:"readeaction " }, { id : 2 , Items:"Comptabilité" }, { id:3 , Items:"Livres"},
    { id : 4 , Items:"" }, { id : 1 , Items:"Informatique" }, { id:3 , Items:"Informatique"},
]



const Footer = () => {
  return (
    <footer className="container-fluid bg-blue-900 dark:bg-blue-900 ">
        <div className="flex  md:flex-col sm:flex-row  lg:flex-row  grid md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-4 gap-1 space-x-5">
            <div class="flex-col">
                <h3><img src="logo_Aymar.png" className="w-10 h-10 bg-white rounded-2xl"/></h3>
                <p className="text-white  leading-9">W3hubs provides you with a .</p>
            </div>
            <div class="flex-col ">
                <h3 className="uppercase text text-2xl text-white pt-3 border-b mb-2">services</h3>
                <ul className="mb-8">
                    {
                        services.map((service)=>
                            <li><a href="#"  className="mx my-2 px-3  
                                  text-white underline hover:font-bold
                                   hover:text-cyan-100 text">
                                      
                                      {service.Items}
                                </a>
                            </li>
                        )
                    }                    
                </ul>
            </div>
            <div class="flex-col">
                <h3  className="uppercase pt-3 text-2xl text-white pt-3 border-b mb-2">catégories</h3>
                <ul className="mb-8">
                    {
                        categories.map((categorie)=>
                            <li><a href="#"  className="mx my-2 px-3  
                                  text-white underline hover:font-bold
                                   hover:text-cyan-100 text">
                                      
                                      {categorie.Items}
                                </a>
                            </li>
                        )
                    }                    
                </ul>
            </div>
            <div className="relative pt-3  ">
                <h3 className="text-base uppercase text-white text-1xl font-bold border-b py-2 leading-9">Envoyer votre email pour plus d'actualités</h3>
                <form>
                     <div className="flex-col items-center justify-center">
                         <div className="my-2"><input type="text" name="" placeholder="email@gmail.com" className="w-full h-10 py-1 px-2 rounded  " /></div>
                         <div><textarea  placeholder="un petit commentaire ..." className="w-full h-20  text-black p-2"></textarea></div>
                     </div>
                     <button type="submit" className="bg-gradient-to-r from-cyan-900 to-gray-900 my-2 py-2 px-3 text-gray-100 border-gray-100 rounded hover:bg-cyan-100 ">Envoyer </button>
                </form>
                

                <ul className="absolute right-0 bottom-3">
                   <li><a href="#"  className="text-white"><BsFacebook className="h-10 w-10"/> </a></li>
                   <li><a href="#"  className="text-white"><AiFillInstagram className="h-10 w-10"/> </a></li>
                   <li><a href="#"  className="text-white"><IoLogoWhatsapp className="h-10 w-10"/> </a></li>
                </ul>
            </div>
        </div>
        <div className="text-uppercase py-3 flex items-center justify-center text-gray-100 bg-cyan-900 border-t ">
             @ Copyright 2022 
        </div>
    </footer>
  )
}

export default Footer;