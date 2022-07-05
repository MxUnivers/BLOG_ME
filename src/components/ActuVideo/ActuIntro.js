import React from 'react'
import  {AiFillPlayCircle} from "react-icons/ai";

const ActuIntro = () => {
  return (
    <div className="my-2 mt-4 mx-3   flex items-center justfiy-center">
        <div className="container flex-col pt-2 border-t text-white  ">
            <div className="flex items-center justify-center ">
                <h3 className="text-2xl font-bold leading-9 text-white uppercase">Articles recent</h3>
            </div>
            {/* Videos ou article en tête */}
            <div class="flex justify-center">
                <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <div  className="relative w-full">
                        <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                        <button type="button" className="absolute top-[30%] right-[50%] text-gray-300 z-1 p-2 " ><AiFillPlayCircle  className="h-20 w-20"/></button>
                    </div>
                    
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p class="text-gray-700 text-base mb-4">
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                </div>
            </div>
            
            

        </div>
    </div>
  )
}

export default ActuIntro;