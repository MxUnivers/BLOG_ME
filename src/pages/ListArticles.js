import  React, {useNavigate} from  "react" ; 
import {Link} from  "react-router-dom" ; 
import {BsArrowRight} from  "react-icons/bs";
import {AiOutlinePlusSquare , AiOutlineLike} from "react-icons/ai"
import  Navbar from  "../components/Navbar";
import  Footer from  "../components/Footer";
import Social from "../components/Social";


const  ListCart = [
    {id  : 1  , title:"Informatique"  , imageSrc:""},
    {id  : 2  , title:"santé"  , imageSrc:""},
    {id  : 3  , title:"Animation"  , imageSrc:""},
    {id  : 4  , title:"travail"  , imageSrc:""},
    {id  : 5  , title:"voyage"  , imageSrc:""},
    {id  : 6  , title:"pensées"  , imageSrc:""},
    {id  : 7  , title:"developpement personnel"  , imageSrc:""},
    {id  : 8  , title:"nature"  , imageSrc:""},
    {id  : 9  , title:"Cinéma"  , imageSrc:""},
]

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
    },{
        id:1 ,to:"#",description:"description de larticle en question ", 
        imageSrc:"https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=600" , date:"11/06/2022",title:"la meilleur de de toute",
    },    
]



function ListArticles(){
    
    return(
        <div>
            <Navbar/>
              <div className="container-fluid bg-gray-900 my-3 mx-3">
                  {/* Social  */}
                  <Social/>
                  
                  <div class="w-full my-12">
                      <div class="max-w-6xl h-2xl mx-auto px-3 sm:px-2 lg:px-3 flex">

                        
                            
                             

                              <div class=" w-full shadow rounded p-8">

                                  <div className="border-b py-2 my-1">
                                      <button type="button"  onClick={()=>{ window.history.back(); }}
                                         className="rounded-l-2xl rounded-r-lg bg-blue-300 text-gray-900 py-1 px-3 ">retour</button>
                                   </div>

                            <div className="py-1 pt-3 pb-4">
                                <h1 class="md:text-3xl text-2xl font-bold text-white leading-9 my-1 mt-6">Plus de 1000 articmle sur les sujets de vos choix</h1>
                                <p className="text-gray-300">plus de 100 article sur votre choix </p>
                            </div>

                                  <div className="flex w-full bordezr-b py-1 space-x-2  ">
                                      {/** champ de recherche  des différents articles ********* */}
                                       <div className="flex-col ">
                                           <input readOnly placeholder="sujet-recherché" className="rounded-md bg-gray-100 text-black py-1 px-2 border-b "/>
                                           <select className="border-b bg-gray-100 text-black font-bold  rounded bg-gray-300 hover:bg-gray-400 ">
                                               {
                                                  ListCart.map((cart)=>
                                                      <option value={cart.id} className="text-base uppercase">{cart.title}</option>
                                                  )
                                               }                                               
                                           </select>
                                       </div>
                                       <div>
                                           <button type="button" className="rounded-md py-1 px-3 bg-cyan-500 text-white hover:bg-cyan-600 active:bg-cyan-700 ">
                                               rechercher catégorie
                                           </button>
                                       </div>
                                       <div className="border my-1 mx-2 rounded-lg bg-gray-100 text-black  flex space-x-2">
                                           <div className="">{articles.length }</div>
                                           <div className="uppercase font-bold text-gray-500">résultats</div>
                                       </div>
                                  </div>
                                  <div className="border-t border-b flex flex-wrap grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4  justify-between pt-12 -mx-6 ">
                                      
                                  {
                                    articles.map((article)=>
                                        <div className="w-full md:w-[100%] sm:w-[100%] lg:w-[100%] p-6 flex flex-col flex-grow flex-shrink ">
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
                                            <div className="flex-none mt-1 bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-2">
                                                <div className="flex items-center justify-between">
                                                    <img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" tabindex="0"/>
                                                    <p className="text-gray-600 text-xs md:text-sm">{article.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                       
                                  </div>


                                  {/* pagination */}
                                  <div className="flex container justify-center items-center  text-black">
                                      <nav aria-label="bg-white Page navigation example">
                                          <ul class="inline-flex items-center justify-center -space-x-px">
                                             <li>
                                                 <Link to="#" class="block py-2 px-3 ml-0 leading-tight bg-white text-black   rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                     <span class="sr-only">Previous</span>
                                                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                                 </Link>
                                             </li>
                                             <li>
                                                 <Link to="#" class="py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
                                             </li>

                                             <li>
                                                 <Link to="#" class="py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
                                             </li>

                                             <li>
                                                 <Link to="#" class="py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
                                             </li>

                                             <li>
                                                 <Link to="#" class="block py-2 px-3 leading-tight  rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                   <span class="sr-only">Next</span>
                                                   <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                                 </Link>
                                             </li>
                                         </ul>
                                        </nav>
                                     </div>



                              </div>
                          </div>
                      </div>
                  </div>
              
            <Footer/>
        </div>
    )
}
export  default ListArticles  ;