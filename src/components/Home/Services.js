import  React from  "react";


// VARIABLES DE SERVICES DIVERS
const  services = [
   
    {
        id: 1 , name :"Informatique" , imageSrc :"https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2 , name :"Animation" , imageSrc :"https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3 , name :"design" , imageSrc :"https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
    
]
function Services(){
    return(
       
<div class="py-16 dark:bg-blue-900">  
<div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
    <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
        <div class="bg-white rounded-[30%] shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl hover:shadow-orange-400 hover:cursor-pointer">
            <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-purple-900">Graphic Design</h3>
                <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                <a href="#" class="block font-medium text-purple-600">Know more</a>
            </div>
            <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"/>
        </div>
        <div class="bg-white rounded-[30%] shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl hover:cursor-pointer">
            <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-purple-900">UI Design</h3>
                <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                <a href="#" class="block font-medium text-purple-600">Know more</a>
            </div>
            <img src="https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg" class="w-2/3 ml-auto" alt="illustration" loading="lazy" width="900" height="600"/>
        </div>
        <div class="bg-white rounded-[30%] shadow-xl px-8 py-12 sm:px-12 lg:px-8 hover:shadow-2xl hover:cursor-pointer">
            <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-purple-900">UX Design</h3>
                <p class="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                <a href="#" class="block font-medium text-purple-600">Know more</a>
            </div>
            <img src="https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg" class="w-2/3 ml-auto " alt="illustration" loading="lazy" width="900" height="600"/>
        </div>
    </div>
</div>
</div>
    )
}
export  default Services;