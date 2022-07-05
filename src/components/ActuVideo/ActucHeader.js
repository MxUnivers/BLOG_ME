
import React from 'react';
import  {FaFacebookF} from  "react-icons/fa";
import  {ImWhatsapp} from  "react-icons/im";
import {BsYoutube} from  "react-icons/bs";


// image de pexel 
const  image = "https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const ActucHeader = () => {
  return (
    <div className="conatiner-fluid bg-gray-900 text-white flex ">
           <div className="w-full flex flex-col items-center justify-center h-[400px] " style={{backgroundImage:"url('"+image+"')"}}>
              <div className="text-2xl font-bold font-base w-[50%]">
                   Suivers nos dans nos actualités, en suivant nos contenu variés
              </div>
              <span className=" flex-row ">
                <input type="text" className="w-full py-1 px-3  w-[50%]" placeholder="nom article ..." />
                <button type="button" className="bg-green-400 text-gray-600 py-1 px-3 ">rechercher</button>
              </span>
                
               <div className="flex-row items-center space-x-2 space-y-2 my-1 mt-3 mb-2">
                   <div className="w-[30%] text-center flex items-center justify-center rounded-lg my-2 bg-green-300 text-gray-800 hover:bg-green-400 ">Catégories : </div>
                   <div className="space-x-2 space-y-2">
                       <button className="rounded-xl py-1 px-2 text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300">Vie</button>
                       <button className="rounded-xl py-1 px-2 text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300">informatique</button>
                       <button className="rounded-xl py-1 px-2 text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300">Santé</button>
                       <button className="rounded-xl py-1 px-2 text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300">religion</button>
                       <button className="rounded-xl py-1 px-2 text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300">informations</button>
                       <button className="rounded-xl py-1 px-2 text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300">pensées</button>
                   </div>
               </div>

               {/* media sociaux */}
               <div className="flex my-1 pt-3 pb-2  space-x-3 text-white border-t mt-1 ">
                   <div className="bg-blue-500 hover:bg-bue-600 text-white active:bg-blue-700 text-center px-3 py-1"><FaFacebookF className="h-10 w-15"/></div>
                   <div className="bg-red-500 hover:bg-red-600 text-white active:bg-red-700 text-center px-3 py-1"><BsYoutube className="h-10 w-15" /></div>
                   <div className="bg-green-500 hover:bg-green-600 text-white active:bg-green-700 text-center px-3 py-1"><ImWhatsapp className="h-10 w-15" /></div>
               </div>

           </div>
    </div>
  )
}

export default ActucHeader;