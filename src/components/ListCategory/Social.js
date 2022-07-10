import React from 'react'
import  {FaFacebookF} from  "react-icons/fa";
import {ImWhatsapp} from  "react-icons/im"
import  {BsYoutube} from  "react-icons/bs";


const Social = () => {
  return (
      <div className="flex items-center justify-center my-1 pt-3 pb-2  space-x-3 text-white  mt-1 ">
          <div className="bg-blue-500 hover:bg-bue-600 text-white active:bg-blue-700 text-center px-3 py-1"><FaFacebookF className="h-10 w-15" /></div>
          <div className="bg-red-500 hover:bg-red-600 text-white active:bg-red-700 text-center px-3 py-1"><BsYoutube className="h-10 w-15" /></div>
          <div className="bg-green-500 hover:bg-green-600 text-white active:bg-green-700 text-center px-3 py-1"><ImWhatsapp className="h-10 w-15" /></div>
      </div>
  )
}

export default Social;