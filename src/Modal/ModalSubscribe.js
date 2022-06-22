import React from 'react';

const ModalSubscribe = (props) => {
  return (
    <div  style={{visibility: props.subscribe == true ? "visible" : "hidden" }} className="fixed z-20  top-0 right-0 w-full h-full bg-gradient-to-t from-black to-transparent p-4 flex items-center justify-center">
       
       <div style={{ backgroundImage:"url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" , backgroundSize:"cover"}} className=" relative flex-col mt-3 rounded-lg  items-center justify-center relative w-[80%] h-[80%] pt-50 container font-sans bg-gradient-to-r from-white to-transparent rounded mt-8 p-4 md:p-24 text-center shadow-lg" >
           
            <h2 class="font-bold break-normal text-2xl md:text-4xl">Envoyer nous votre email svp</h2>
            <h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Cele ne vous prendra qu'<span className="font-bold underline">une minute</span></h3>
            <div class="w-full text-center pt-4">
                <form action="#">
                    <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                        <input type="email" placeholder="youremail@example.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"/>
                        <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-cyan-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-cyan-400">Subscribe</button>
                    </div>
                </form>
            </div>
       
             <button type="button" onClick={props.HideSuscribe} className="absolute right-2 top-2 rounded text-4xl  text-black border bg-gray-100 rounded p-3">x</button>
       </div>
    </div>
  )
}

export default ModalSubscribe ;