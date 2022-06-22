import  React from  "react";


// VARIABLES DE SERVICES DIVERS
const  services = [
   
    {
        id: 1 ,
        name :"Informatique" ,
        imageSrc :"https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        text : "Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
        href:"#"
    },
    {
        id: 2 ,
        name :"Animation" ,
        imageSrc :"https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=600",
        text:"Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
        href:"#"
    },
    {
        id: 3 , 
        name :"design" , 
        imageSrc :"https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=600",
        text:"Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.",
        href:"#"
    }
    
]
function Services(){
    return(
       


<div class="flex justify-center items-center">
  
  <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-5 md:py-5 md:px-6 py-2 px-4 w-96 sm:w-auto">
    <div role="main" class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-350">Le meilleurs actualites pour vous </h1>
      <p class="text-base leading-normal text-center text-gray-600 dark:text-gray-500 mt-4 lg:w-1/2 md:w-10/12 w-11/12">MxBlog vous propose d'autres videos , images et plus de nos contenus au travers de nos services , tels que lanimation , le montage video , les videos de cinémas , les images libres de droits  , et bénéficez de plusieurs autres Services encore ;;;;</p>
    </div>
    <div class="lg:flex items-stretch md:mt-12 mt-8">
      <div class="lg:w-1/2">
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div class="sm:w-1/2 relative">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute z-1 bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full" alt="chair" />
          </div>
          <div class="sm:w-1/2 sm:mt-0 mt-4 relative overflow-hidden hover:cursor-pointer">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute z-1 bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/3C5HvxC/img-2.png" class="w-full" alt="wall design" />
          </div>
        </div>
        <div class="relative overflow-hidden hover:cursor-pointer">
          <div>
            <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute z-1 bottom-0 left-0 md:p-10 p-6">
              <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" class="w-full mt-8 md:mt-6 hidden sm:block transition ease-in-out duration-300 hover:scale-125" />
          <img class="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
        </div>
      </div>
      <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div class="relative overflow-hidden">
          <div>
            <p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
            <div class="absolute z-1 bottom-0 left-0 md:p-10 p-6">
              <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
              <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
              <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full sm:block hidden" />
          <img class="w-full sm:hidden transition ease-in-out duration-300 hover:scale-125" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
        </div>
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div class="relative w-full overflow-hidden ">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute z-1 bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full transition ease-in-out duration-300 hover:scale-125" alt="chair" />
          </div>
          <div class="relative w-full sm:mt-0 mt-4 overflow-hidden">
            <div>
              <p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
              <div class="absolute z-1 bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                <p class="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                <a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
            <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full transition ease-in-out duration-300 hover:scale-125" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export  default Services;