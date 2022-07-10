

import React from 'react'



const  articles =  [
    {
        lien : "/article",
        nom:"La publicté dans mes onviron des articles",
        description : "Le meilleur pour vous en terme de blog",
        imageSrc : "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },{
        lien : "/article",
        nom:"La publicté dans mes onviron des articles",
        description : "Le meilleur pour vous en terme de blog",
        imageSrc : "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        lien : "/article",
        nom:"La publicté dans mes onviron des articles",
        description : "Le meilleur pour vous en terme de blog",
        imageSrc : "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        lien : "/article",
        nom:"La publicté dans mes onviron des articles",
        description : "Le meilleur pour vous en terme de blog",
        imageSrc : "https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
    
]
const LastPost = () => {
    
  return (
      <section className="container-fluid mx-2 my-2 mt-10 ">
          <div className="flex-col">
              <div className="">
                  <div className="ml-3 text-gray-100 text-4xl leading ">
                      <h3 className="text-white font-extrabold ">Articles recément postés</h3>
                  </div>
                  <div className="my-3 flex grid-cols-1   md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 grid  gap-4  w-full">

                      {articles.map((article)=>
                            
                          <div className="w-200 md:w-100 w-100 h-180 p-6 flex flex-col flex-grow flex-shrink overflow-hidden ">
                              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg hover:shadow-sm ">
                                  <a href={article.lien} className="flex flex-wrap no-underline hover:no-underline">

                                      <img src={article.imageSrc} className="overflow-hidden md:h-50  h-25 w-full transition-all duration-500 hover:scale-125 cursor-pointer  rounded-t pb-6" />
                                      <div className="w-full font-bold text-xl text-gray-900 px-3">{article.nom}</div>
                                      <p className="text-gray-800 font-serif text-base px-6 mb-1">
                                          {article.description}
                                      </p>
                                  </a>
                              </div>
                              <div className="flex-none mt-auto bg-white rounded shadow-lg px-6">
                                  <div className="flex items-center justify-between">
                                      <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" tabindex="0" />
                                      <p className="text-gray-600 text-xs md:text-sm">{article.date}</p>
                                  </div>
                              </div>
                          </div>
                      )

                      }

                  </div>


              </div>
          </div>
      </section>
              
  )
}

export default LastPost ;  