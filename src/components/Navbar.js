

import React ,{useState} from 'react';
import {Link} from  "react-router-dom"


const  categories = [
    {id : 1 ,  titre:"Informatique" ,  to:"#"},
    {id : 2 ,  titre:"santé" ,  to:"#"},
    {id : 3 ,  titre:"Animation" ,  to:"#"},
    {id : 4 ,  titre:"travail" ,  to:"#"},
    {id : 1 ,  titre:"voyage" ,  to:"#"},
    {id : 1 ,  titre:"pensées" ,  to:"#"},
    {id : 1 ,  titre:"develppement personel" ,  to:"#"},
    {id : 1 ,  titre:"nature" ,  to:"#"},
    {id : 1 ,  titre:"Cinéma" ,  to:"#"}
]


 function Navbar() {


     const [cart, setCart] = useState(false);
     const [drop, setDrop] = useState("<");

     function ShowCart(){
         setCart(!cart);
         
     }


  return (
      <nav className="relative top-0 right-0 z-4 bg-blue-700 dark:bg-blue-900">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                  
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <Link to={"/"} className="flex-shrink-0 flex items-center w-10 text-white border-b py-1">
                        <img className=" lg:block h-8 w-auto" src="logo_Aymar.png" alt="Workflow"/>
                    </Link>
                    <div className="hidden relative sm:block sm:ml-6">
                        <div className="flex space-x-4">
                             <Link to="/" className="flex justify-center items-center bg-gray-900 text-white px-3 py-5  rounded-md text-sm font-medium uppercase" aria-current="page">Accueil</Link>
                             <Link to={"/about"} className="flex justify-center items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">a propos de nous</Link>
                             <Link to={"/contact"} className="flex justify-center items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">contact</Link>
                             <Link to={"/actu"} className="flex justify-center items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">Videos</Link>
                             <Link to={"/more-articles"} className="flex justify-center items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">plus articles</Link>
                             <Link to={"/services"} className="flex justify-center items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">services</Link>
                             <Link to={"/category"} onMouseEnter={ShowCart} onClick={ShowCart} className=" flex justify-center items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">categories <span></span></Link>
                             <Link to={"/list-cart"} onMouseEnter={ShowCart} onClick={ShowCart} className=" flex justify-center items-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase">listes-catégories <span></span></Link>
                        </div>
                        
                        { /* List categories articles */
                            cart ==  true ?
                               <div className=" grid grid-cols-4 gap-1 h-50 justify-evenly origin-top-right flex float absolute right-0 mt-2 w-full z-10 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                   {    
                                       categories.map((cartegorie)=>
                                          <Link to={cartegorie.to} id={cartegorie.id} className="rounded  grid-2 flex col-6 px-4 py-2 hover:bg-orange-300 border p-3  text-sm text-gray-700" role="menuitem" tabindex="-1" >
                                             {cartegorie.titre}
                                          </Link>
                                       )
                                   }
                                </div>
                                : null
                        }
                    </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                               <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                    </button>

                    <div className="ml-3 relative">
                        <div>
                            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 flex">
                <Link to="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</Link>
                <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</Link>
                <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</Link>
            </div>
            <div className="">
            </div>
        </div>
    </nav>
  
  )
}

export default Navbar;
