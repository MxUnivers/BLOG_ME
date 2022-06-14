import  React from  "react";
import  {AiOutlineArrowRight} from  "react-icons/ai" ;


const articles = [
    {
        id:1 ,href:"#", imageSrc:"https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"la transaction",
    },
    {
        id:2 ,href:"#", imageSrc:"https://images.pexels.com/photos/12436272/pexels-photo-12436272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , date:"11/06/2022",title:"les nouveau Samsung A 86",
    },
    {
        id:3 ,href:"#", imageSrc:"https://images.pexels.com/photos/5588373/pexels-photo-5588373.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"Le télétravail change notre monde au quotidien",
    },
    {
        id:4 ,href:"#", imageSrc:"https://images.pexels.com/photos/7991270/pexels-photo-7991270.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"Pourquoi regarder les films a la salle de cinéma est si paisible",
    },
    {
        id:5 ,href:"#", imageSrc:"https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"la transaction",
    },
    {
        id:6 ,href:"#", imageSrc:"https://images.pexels.com/photos/12436272/pexels-photo-12436272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , date:"11/06/2022",title:"les nouveau Samsung A 86",
    },
    {
        id:7 ,href:"#", imageSrc:"https://images.pexels.com/photos/5588373/pexels-photo-5588373.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"Le télétravail change notre monde au quotidien",
    },
    {
        id:8 ,href:"#", imageSrc:"https://images.pexels.com/photos/7991270/pexels-photo-7991270.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"Pourquoi regarder les films a la salle de cinéma est si paisible",
    }
]


function OtherArticles({title}){
    return(
        <div className="container-fluid flex-col items-center justify-center">
             <div className=" pt-3 border-t mt-1 pb-1">
                 <h3 className="text-2xl text-black ">{title}</h3>
             </div>

             <div className=" flex">
                 {
                    articles.map((article)=>
                        <div className="  flex-col items-center justify-center ">
                            <div className=" card-zoom-image overflow-hidden">
                                <a href={article.href}>
                                   <img className=" w-full h-[100] hover:scale-125 transition-all duration-500 cursor-pointer" src={article.imageSrc} alt="games" />
                                </a>
                            </div>
                            <div className="py-2 px-4 w-full flex justify-between bg-cyan-700">
                                <p className="text-sm text-white font-semibold tracking-wide">Bruce Wayne</p>
                                <span className="text-sm text-white font-semibold tracking-wide rounded-xl bg-yellow-200 py-1 px-3 ">{article.date}</span>
                            </div>
                            <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                <h1 className="text-lg text-gray-900 font-semibold tracking-wider">{article.title}</h1>
                                <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                            </div>
                            <button className=" w-full flex justify-right py-1 px-3  rounded-br-5xl  mb-3 flex items-center rounded-xl dark:bg-blue-200 text-black ">
                                   <span className="flex justify-righ items-center  space-x-3"  >lire <AiOutlineArrowRight className="font-extrabold"/> </span> 
                            </button>
                        </div>
                    )
                 }
            </div>
        </div>
    )
}
export default OtherArticles;