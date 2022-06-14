import React from  "react";


const Item = [
    { id : 1 , Item : "informatique" , href:"#"} , { id : 2 , Item : "Santé" ,href:"#"} , 
    { id : 1 , Item : "Animation" ,href:"#"} , { id : 4 , Item : "voyage" ,href:"#"} , 
    { id : 1 , Item : "Pensées" , href:"#"} , { id : 6 , Item : "developpement" , href:"#"} , 
    { id : 7 , Item : "nature" , href:"#"} , { id : 8 , Item : "Cinéma" , href:"#"} , 
    { id : 9 , Item : "travail" , href:"#"} , 
]
function NavItem(){
    return(
        <nav className="container bg-white">
             <div className="flex items-center justify-center  space-x-3 py-3 border-b border-t my-1">
                {
                    Item.map((element)=>
                        <a href={element.href} className="rounded-2xl py-3 
                              transition-all duration-500 cursor-pointer
                             px-2 bg-gray-100 text-black 
                             hover:bg-gray-300 shadow-lg">
                                {element.Item}
                        </a>
                    )
                }
             </div>
        </nav>
    )

}export default NavItem;