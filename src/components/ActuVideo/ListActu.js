import React ,{useState} from 'react';
import  {AiFillPlayCircle} from "react-icons/ai";

const videos = [
    {
        id : 1 , category :"Vie" ,  imageSrc : "https://picsum.photos/seed/57/40/40", 
    },
    {
      id : 1 , category :"Santé" ,  imageSrc : "https://picsum.photos/seed/59/300/200", 
    },
    {
      id : 2 , category :"livres" ,  imageSrc : "https://picsum.photos/seed/60/300/200",
    },
    {
      id : 2 , category :"religion" ,  imageSrc : "https://picsum.photos/seed/22/300/200",
    },
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

    <div className="m-10 pt-3 flex bg-gray-900 items-center justify-center">
      <div className="grid grid-cols-12 gap-6 gap-y-4 max-w-6xl">


        {
          videos.map((video) =>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <card className="w-full flex flex-col">
                <div className="relative">

                  {/*<!-- Image Video --> */}
                  <a href="#">
                    <img src="https://picsum.photos/seed/90/300/200" className="w-96 h-auto" />
                  </a>

                  <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
                </div>

                <div className="flex flex-row mt-2 gap-2">

                  {/*<!-- Profile Picture --> */}
                  <a href="#">
                    <img src="https://picsum.photos/seed/57/40/40" className="rounded-full max-h-10 max-w-10" />
                  </a>

                  {/*<!-- Description --> */}
                  <div clas="flex flex-col">
                    <a href="#">
                      <p className="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                    </a>
                    <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#"> Web Dev Simplified </a>
                    <p className="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
                  </div>

                </div>
              </card>
            </div>
          )
        }



      </div>
    </div>
  )
}

export default ListActu ;