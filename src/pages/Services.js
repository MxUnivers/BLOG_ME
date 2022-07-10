import React from 'react'



const services  =  [
    {
        href:"#",
        nom : "Comunications",
        description :"Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
        imageScr:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
    },
    {
        href:"#",
        nom : "Comunications",
        description :"Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
        imageScr:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg",
    },
    {
        href:"#",
        nom : "Comunications",
        description :"Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.",
        imageScr:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg",
    }
]

const  projets =  [
    {
        imageSrc :"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",        
    },{
        imageSrc :"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",        
    },{
        imageSrc :"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",        
    },{
        imageSrc :"https://images.pexels.com/photos/811587/pexels-photo-811587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",        
    }
]


const Services = () => {
  return (
      <div class="bg-gray-900 py-14">
          <h3 class="text-2xl tracking-widest text-green-600 text-center">FEATURES</h3>
          <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Our Features & Services.</h1>


          <div class="md:flex md:justify-center md:space-x-8 md:px-14">
              {
                services.map((service)=>
                    <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                        <div class="w-sm">
                            <img class="w-64" src={service.imageScr} alt="" />
                            <div class="mt-4 text-green-600 text-center">
                                <h1 class="text-xl font-bold">{service.nom}</h1>
                                <p class="mt-4 text-gray-600">{service.description}</p>
                                <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">MORE</button>
                            </div>
                        </div>
                    </div>
                )
              }
          </div>

          <div className="mt-3 pt-10 my-1 container-fluid px-10 ">
              <div className=" text-center border-white  my-2">
                 <h2 className="text-white  text-3xl font-bold">Plus de 20 projets terminés <span className="bg-green-500 text-white p-2 rounded-lg">70%</span></h2>
                 <p className="text-gray-400 my-1">
                    nous vous accompanons dans vos projets  , plus de 30 projets a notre actif
                 </p>
              </div>

              <div className="flex-col mt-10  ">
                  <div className="flex justify-center items-center space-x-3 py-3">
                    <button type="button" className="bg-blue-500 text-xl text-white py-2 px-3 rounded-2xl hover:bg-gray-600 active:bg-blue-700 " >
                        Design
                    </button>
                    <button type="button" className="bg-gray-500 text-white py-2 px-3 rounded-2xl hover:bg-gray-600 active:bg-blue-700 " >
                        Design
                    </button>
                    <button type="button" className="bg-gary-500 text-white py-2 px-3 rounded-2xl hover:bg-gray-600 active:bg-blue-700 " >
                        Design
                    </button>
                    <button type="button" className="bg-gray-500 text-white py-2 px-3 rounded-2xl hover:bg-gray-600 active:bg-blue-700 " >
                        Design
                    </button>
                    <button type="button" className="bg-gray-500 text-white py-2 px-3 rounded-2xl hover:bg-gray-600 active:bg-blue-700 " >
                        Design
                    </button>
                  </div>


                  <div className="flex items-center justify-center">
                      <div className=" justify-center grid grid-cols-2 my-1 pt-5 ">

                          {
                              projets.map((projet) =>
                                  <div class="flex flex-col gap-1 m-3">


                                      <a href="" class="bg-purple-500">
                                          <img src={projet.imageSrc} class="hover:translate-x-1 hover:-translate-y-1 delay-50 duration-100" />
                                      </a>
                                      <a href="#" class="hover:text-purple-500 text-gray-200 font-semibold"> Elden Ring </a>

                                      <a href="#" class="hover:text-purple-500 text-sm text-gray-400 -mt-1"> 350K viewers </a>

                                      <div class="flex flex-row flex-wrap gap-2">
                                          <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> RPG </a>
                                          <a href="#" class="hover:bg-gray-600 text-gray-300 text-xs font-semibold bg-gray-700 px-2 py-1 rounded-full"> Action </a>
                                      </div>

                                  </div>
                              )
                          }

                      </div>
                  </div>


              </div>

          </div>
          <h4 class="text-center font-thin text-xl mt-14">Image from <span class="underline text-gray-600 cursor-pointer">Freepik</span></h4>
      </div>
  )
}

export default Services