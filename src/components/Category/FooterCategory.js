import  React from  "react";


function FooterCategory(){
    return(
        <footer class="bg-gray-900">
               <div class="container max-w-6xl mx-auto flex items-center px-2 py-8">
       
                   <div class="w-full mx-auto flex flex-wrap items-center">
                       <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                           <a href="#" class="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
                            <img src={"logo_Aymar.png"} className="h-10 w-10 rounded-2xl bg-gray-100 "/> <span class="text-base text-gray-200"> Ghostwind CSS</span>
                           </a>
                       </div>
                       <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                           <ul class="list-reset flex justify-center flex-1 md:flex-none items-center">
                               <li>
                                   <a href="#" class="inline-block py-2 px-3 text-white no-underline" href="#">Active</a>
                               </li>
                               <li>
                                   <a href="#" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3" href="#">link</a>
                               </li>
                               <li>
                                   <a href="#" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3" href="#">link</a>
                               </li>
                               <li>
                                   <a href="#" class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-3" href="#">link</a>
                               </li>
                           </ul>
                       </div>
                   </div>
       
       
       
               </div>
           </footer>
    )
}
export default FooterCategory;