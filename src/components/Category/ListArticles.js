import  React from  "react";
import {Link} from "react-router-dom" ;
import  {AiOutlineArrowRight} from  "react-icons/ai" ;


const articles = [
    {
        id:1 ,to:"/article",description:"description de larticle en question ", 
        imageSrc:"https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"la meilleur de de toute",
    },
    {
        id:2 ,to:"#",description:"desription en question sur le samsung", 
        imageSrc:"https://images.pexels.com/photos/12436272/pexels-photo-12436272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , date:"11/06/2022",title:"les nouveau Samsung A 86",
    },
    {
        id:3 ,to:"#",description:"les plus grandes sours de ", 
        imageSrc:"https://images.pexels.com/photos/5588373/pexels-photo-5588373.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"Le télétravail change notre monde au quotidien",
    },
    {
        id:4 ,to:"#",description:"desription de larticles de dbndndbnbsnbsnbsnbsnbsnbsnsbnsbnsbnsbnsbsnsbnb", 
        imageSrc:"https://images.pexels.com/photos/7991270/pexels-photo-7991270.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"Pourquoi regarder les films a la salle de cinéma est si paisible",
    },
    {
        id:1 ,to:"#",description:"description de larticle en question ", 
        imageSrc:"https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"la meilleur de de toute",
    }
]


function ListArticles(){
    if(articles== null){
        return(
            <div className="container-fluid ">
                <div>Auccun resultat afficher ? </div>
            </div>
        )
    }
    return(
        <div className="flex flex-wrap justify-between pt-12 -mx-6 ">
            
            <div className="relative bg-white py-2 rounded shadow w-full ">
               Plus d'articles <Link to="/more-articles" className="absolute right-5 text-base top-3 tet-black hover:underline ">voir plus</Link>
            </div>
            {
                articles.map((article)=>
                    <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink ">
                        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg hover:shadow-sm ">
                           <Link to={article.to} className="flex flex-wrap no-underline hover:no-underline">
                             
                                <img src={article.imageSrc} className="overflow-hidden md:h-86  h-64 w-full transition-all duration-500 hover:scale-125 cursor-pointer  rounded-t pb-6"/>
                            
                             <p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                             <div className="w-full font-bold text-xl text-gray-900 px-6">{article.title}</div>
                             <p className="text-gray-800 font-serif text-base px-6 mb-5">
                                  {article.description}
                             </p>
                           </Link>
                        </div>
                        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                            <div className="flex items-center justify-between">
                                <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" tabindex="0"/>
                                <p className="text-gray-600 text-xs md:text-sm">{article.date}</p>
                            </div>
                        </div>
                    </div>
                )
            }
       
                   </div>
    )
}
export default ListArticles;