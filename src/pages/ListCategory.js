import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const images = [
    {
        id : 1 ,href:"/category" , description : "Les meilleurs articles de l'annés qui pourrai vous interresser" , category :"Article" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", 
    },
    {
      id : 1 ,href:"/actu",description : "Suivez l'actulité au travers de nos videos sur youtbe et autres" , category :"Videos" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp", 
    },
    {
      id : 2 ,href:"#", category :"livres" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    },
    {
      id : 2 ,href:"#", category :"religion" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    },
    {
      id : 2 ,href:"#", category :"informations" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
    },
    {
      id : 2 ,href:"#", category :"pensées" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    }
]

const ListCategory = () => {
  return (
    <div>
        <Navbar/>
            <div className="container-fluid">
                <div className="flex ">
                      
                </div>
            </div>

            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2 ">
            {
                images.map(image=>
                       <div className="flex flex-wrap w-1/3 hover:cursor-pointer m-3 brightness-70  " >
                          <a href={image.href}>
                           <div className="relative p-6 md:p-2 h-[150px] w-[300px]"style={{backgroundImage:"url('"+image.imageSrc+"')" ,  backgroundSize :"cover"}} >
                               <h3 className="text-2xl uppercase text-white  brightness-100">
                                  {image.category}
                               </h3>
                               <div className="my-1 text-gray-500">
                                   <p>{image.description}</p>
                               </div>
                          </div>
                          </a>
                       </div>
                )
            }
            </div>   
            </div>

                      
             
        <Footer/>
    </div>
  )
}

export default ListCategory