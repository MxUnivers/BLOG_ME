import  React  , {useState ,  useEffect} from "react";
import  {useNavigate} from  "react-router-dom";

import {BsFacebook , BsYoutube } from  "react-icons/bs"
import  {IoLogoWhatsapp} from  "react-icons/io";



function Social(){
    return(
        <div className="fixed top-20 bg-white right-3 z-8 w-100 h-100 shadow-2xl rounded-2xl ">
            <div className="flex-col px-3 space-y-2">
                
                    <button type="button" className="my-1 rounded-2xl bg-gray-500 py-1 px-3 text-white hover:bg-gray-700">+ Rejoindre</button>
               
                <div className="flex-col   space-y-3">

                   <div type="button" className="flex items-center justify-center cursor-pointer text-blue-600  border-t  hover:text-blue-500 active:text-blue-700 rounded p-1">
                      <BsFacebook className="flex-items-center justify-center h-10 w-10"/>
                   </div> 
                   <div type="button" className="flex items-center justify-center cursor-pointer text-red-600  border-t  hover:text-red-500 active:text-red-700 rounded p-1">
                      <BsYoutube className="flex-items-center justify-center h-10 w-10"/>
                   </div>
                   <div type="button" className="flex items-center justify-center cursor-pointer text-green-600  border-t  hover:text-green-500 active:text-green-700 rounded p-1">
                        <IoLogoWhatsapp className="flex-items-center justify-center h-10 w-10"/>
                   </div>                    

                </div>
            </div>
        </div>
    )
}
export  default Social ;