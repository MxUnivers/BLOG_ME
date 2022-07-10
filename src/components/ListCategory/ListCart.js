import React from 'react'




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

const ListCart = () => {
  return (
    
    <div className="container px-1 py-2 mx-auto lg:pt-12 lg:px-32 overflow-hidden">


      <div className="flex-col items-center justify-center my-3  ">
        <h3 className="text-gray-100 text-3xl font-bold leading-9">Nos catégories</h3>
        <p className="text-gray-200">Le meilleurs pour vous aen matière de blog</p>
      </div>


      <div className="flex flex-wrap -m-1 md:-m-2 text-gray-100 border-b">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 row-6 my-1">
          {
            images.map(image =>
              <div className="flex rounded-lg flex-wrap sm:w-1/3 md:w-1/3 lg:w-1/4 m-6 p-3 mx-10 hover:cursor-pointer brightness-70 " >
                <a href={image.href}>
                  <div className="relative p-6 md:p-2 h-[150px] w-[300px] " style={{ backgroundImage: "url('" + image.imageSrc + "')", backgroundSize: "cover" }} >
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
    </div>
  )
}

export default ListCart