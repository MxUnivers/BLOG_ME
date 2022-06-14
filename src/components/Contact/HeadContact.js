import React from 'react';
import  {BsFacebook} from  "react-icons/bs";
import {IoLogoWhatsapp} from  "react-icons/io" ;
import  {AiFillInstagram} from  "react-icons/ai"
import {BsTelephoneOutboundFill} from  "react-icons/bs"

const HeadContact = () => {
  return (
    <div className="container-fluid bg-white">
        <div className="flex ">
            
                <div className="flex-col w-full items-center justify-center" data-wow-delay=".1s" style={{visibility: "visible", animationDelay: "0.1s" , animationName: "revert-layer"}}>
                    <span className="flex items-center justify-center text-center text-2xl  text-indigo-500 font-bold">
                        Avez vous besoin d'aide ?
                    </span>
                    <h2 className="text-center text-5xl font-bold">
                        Contacter nous
                    </h2>
                    <div className="uppercase flex-col items-center justify-center mt-8">
                        
                        <ul className="flex items-center justify-center space-x-5">
                            <li><a href="#"><BsFacebook className="w-10 h-10 text-blue-500"/></a></li>
                            <li><a href="#"><IoLogoWhatsapp className="w-10 h-10 text-green-500"/></a></li>
                            <li><a href="#"><AiFillInstagram className="w-10 h-10 text-gradient-to-t from-red-500 to-indigo-500"/></a></li>
                        </ul>


                        <div className="border-t   border-b mt-5 mb-3 pt-3 pb-">
                            <div className="flex items-center justify-center space-x-3">
                                <div>téléphone : </div>
                                <div className="flex items-center justify-center spacex-3">
                                    <button type="tel" className="rounded-xl mr-3 py-2 text-gray-800 bg-gray-300 py-2 px-1 "  >
                                        +2250595387052
                                    </button>
                                    <button type="button" className="bg-blue-900 rounded-xl p-2">
                                         <BsTelephoneOutboundFill className="w-10 h-10 text-gray-100"/>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-center space-x-3">
                                <div className="">
                                    email :
                                </div>
                                <div className="text-gray-600 font-bold lowercase underline ">
                                    email@gmail.com
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            
        </div> 
    </div>
        
  )
}

export default HeadContact