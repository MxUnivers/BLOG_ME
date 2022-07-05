import React ,{useState} from 'react';
import  {AiFillPlayCircle} from "react-icons/ai";

const videos = [
    {
        id : 1 , category :"Vie" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", 
    },
    {
      id : 1 , category :"Santé" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp", 
    },
    {
      id : 2 , category :"livres" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    },
    {
      id : 2 , category :"religion" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    },
    {
      id : 2 , category :"informations" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp",
    },
    {
      id : 2 , category :"pensées" ,  imageSrc : "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    }
]


const ListActu = () => {
  const  [Video ,  setvideo] = useState(false) ;
  function ShowVideo(){
    setvideo(true)
  }
  function HideVideo(){
    setvideo(false)
  }
 

  return (
    <section className="overflow-hidden text-gray-700 my-2 mb-5 pb-5">
  <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
   
    <div className="flex flex-wrap -m-1 md:-m-2">
      
      {
       
          videos.map((video)=>
                
               <div className="flex flex-wrap w-1/3 hover:cursor-pointer" key={video.id}>
                  <div className="relative z-1 w-full p-1 md:p-2" onClick={ShowVideo}>
                     <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                        src={video.imageSrc}/>
                      <button type="button"  className="absolute top-[30%] right-[30%] z-2 text-gray-100 p-2 "><AiFillPlayCircle className="h-16 w-20"/></button>
                  </div>
  
                  <div style={{visibility : Video ==true ? "visible" : "hidden"}} className="fixed h-[100%] top-0 right-0 z-10 p-1 bg-gradient-to-t from-black to-transparent">
                      <button type="button" onClick={HideVideo} className="p-2 mx-2 rounded-[50%] text-gray-500 bg-gray-100 text-2xl hover:cursor-pointer " >x</button>
                      <video class="w-[85%] shadow-lg py-1 px-10  " autoplay loop controls >
                         <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
                      </video>
                  </div>
               </div>
  
               
          )
       
      }
      
    </div>
  </div>
</section>
  )
}

export default ListActu ;