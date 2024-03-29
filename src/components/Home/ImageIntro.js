
import  React , {useState} from "react";


function ImageIntro({image}){
     return(
       <div class="bg-purple w-full px-2">
           <div class="container mx-auto rounded-t shadow bg-cover bg-bottom m-4" style={{backgroundImage: "url('"+image+"')" , backgroundSize:"cover"}}>
               <nav class="flex justify-between p-8 items-center mb-16">
                   <a href="#" class="font-sans text-black md:text-white text-sm md:text-4xl font-thin">Massive Dynamics</a>
                   <ul class="list-reset flex">
                      <li><a href="#" class="text-black md:text-white p-2 md:p-4">Home</a></li>
                      <li><a href="#" class="text-black md:text-white p-2 md:p-4 whitespace-no-wrap">About Us</a></li>
                      <li><a href="#" class="text-black md:text-white p-2 md:p-4">Contact</a></li>
                    </ul>
                </nav>

                <div class="text-center text-white pb-16">
                          <h1 class="font-sans font-thin">Reality is just a matter of perception.</h1>
                          <h2 class="font-thin text-sm tracking-wide mt-2 mb-4">There are no limits, except for those that we impose on ourselves. Join the future</h2>
                          <a href="#" class="rounded bg-orange text-white p-4 font-bold inline-block mb-16">
                             voir plus
                          </a>
                </div>
            </div>
        </div>
     )

}export  default ImageIntro;