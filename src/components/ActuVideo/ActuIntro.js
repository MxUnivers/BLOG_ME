import React from 'react'
import  {AiFillPlayCircle} from "react-icons/ai";

const ActuIntro = () => {
  return (
      <div className="my-2 mt-4 mx-3   flex-col  justfiy-center">

          <div className="text-white flex-col justify-center  ">
              <h3 classname="text-xl uppercase">Nos actulités</h3>
              <p className="text-gray-200 ">Nos publications en continus sur notre blog</p>
          </div>



          <div className="flex justify-center">
              {/* Videos ou article en tête */}
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

          </div>




      </div>
  )
}

export default ActuIntro;