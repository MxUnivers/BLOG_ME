import  React from "react";


const  steps = [
    {
        id:1 ,
        imageSrc:"https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ,title:"Etape 1  :  image" , 
        text:"choisir les images appropriés pour son bolg est nécéssaires pour la réussite de son bolg",
        lien:"#"
    },
    {
        id:2 ,
        imageSrc:"https://images.pexels.com/photos/635504/pexels-photo-635504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ,title:"Etape 2  :  joie" , 
        text:"la joie un emotion plus poisitive pour la journée rien d'autre que des moments de joie das un couple , une nre lation une amitié",
        lien:"#"
    },
    {
        id:3 ,
        imageSrc:"https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ,title:"Etape 4  :  cuisine" , 
        text:"Cuisiner de devient tout un art quand dans la cuisine on a des chef venus de tout les pays pour apporter de bons monments a leur occupants , juste avec des cesseroles . comme on le dit la cuis ne ce n'est pas seulement une question de gout .",
        lien:"#"
    },
    {
        id:4 ,
        imageSrc:"https://images.pexels.com/photos/4965381/pexels-photo-4965381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ,title:"Etape 5  :  l'eau de rivière" , 
        text:"l'eau  de rivière une eau plus tôt propre pour la consommation ,  les toutriste de demèlent patout dans toute la planète pour trouvé une eau calme et paisilble dans la pour y passer de bon moment ",
        lien:"#"
        
    },
    {
        id:5 ,
        imageSrc:"https://images.pexels.com/photos/8068144/pexels-photo-8068144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ,title:"Etape 5  :  Plan de vie joyeux" , 
        text:"c'est cool de d'être joyeux surtout quand c'est pour apporter so aide la plus précieux  ,avec des cadeaux ,et autres",
        lien:"#"
    },
    {
        id:5 ,
        imageSrc:"https://images.pexels.com/photos/6146970/pexels-photo-6146970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ,title:"Etape 6  :  les relations humaines" , 
        text:"Vivre aen harmonie fait partie de la vie c'est tellemen  intéressant comme sensation de ,  rien qu'a y penser je suis tout ému .",
        lien:"#"
        ,italic:"c'est coll"
    }
]



 function Steps(){
    return(
        <div className="container flex ">
            <div className="flex-col ">
               {
                   steps.map((step)=>
                       <div>
                           <img  src={step.imagSrc} className="h-full w-full " />
                            <h3 className="text-black text-xl uppercase py-1 font-bold">{step.title}</h3>
                            <p className="py-3 px-1">{step.text}</p>
                            <p className="italic border-l-red-300 py-1 px-1">{step.italic}</p>
                            <a href={step.lien} target={"_blank"}>aller vers le site de </a>
                    </div>
                   )
               }
            </div>
        </div>
    )
}
export  default Steps ;