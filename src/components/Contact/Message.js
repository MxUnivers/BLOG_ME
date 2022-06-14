import React from 'react'

const Message = () => {
  return (
    <div className="container-fluid pt-5 mt-2 mb-10 pb-2">
                    <div className="a8 lg:a1Z/12 xl:a1Q/12 ae">
                        <div>
                            
                            <form>
                                 <div className="a9 a1t ac[-16px]">

                                     <div className="flex justify-center py-3">
                                        <h3 className="uppercase text-2xl font-bold">Regoingnez nous en vous inscrivant</h3>
                                     </div>

                                     <div className="flex justify-center items-center">
                                        <div className="flex-col  border-b mb-2 pb-2">
                                           <div>
                                               <label for="name" className=" text-gray-500 uppercase text-xl ">
                                               Nom <span className="text-red-500 font-bold">*</span>
                                            </label>
                                           </div>
                                           <div>
                                               <input type="text" name="name" placeholder="Enter your first name" className="text-black py-1 px-2 h-10  border focus:shadow-lg w-96 focus:border-b focus-bg-gray-100"/>
                                           </div>
                                        </div>
                                     </div>


                                     <div className="flex justify-center items-center">
                                        <div className="flex-col  border-b mb-2 pb-2">
                                           <div>
                                               <label for="name" className=" text-gray-500 uppercase text-xl ">
                                               prénoms <span className="text-red-500 font-bold">*</span>
                                            </label>
                                           </div>
                                           <div>
                                               <input type="text" name="name" placeholder="Enter your first name" className="text-black py-1 px-2 h-10  border focus:shadow-lg w-96 focus:border-b focus-bg-gray-100"/>
                                           </div>
                                        </div>
                                     </div>

                                     <div className="flex justify-center items-center">
                                        <div className="flex-col  border-b mb-2 pb-2">
                                           <div>
                                               <label for="number" className=" text-gray-500 uppercase text-xl ">
                                               number <span className="text-red-500 font-bold">*</span>
                                            </label>
                                           </div>
                                           <div>
                                               <input type="number" name="number" placeholder="Enter your first name" className="text-black py-1 px-2 h-10  border focus:shadow-lg w-96 focus:border-b focus-bg-gray-100"/>
                                           </div>
                                        </div>
                                     </div>

                                     <div className="flex justify-center items-center">
                                        <div className="flex-col  border-b mb-2 pb-2">
                                           <div>
                                               <label for="name" className=" text-gray-500 uppercase text-xl ">
                                               email <span className="text-red-500 font-bold">*</span>
                                            </label>
                                           </div>
                                           <div>
                                               <input type="email" name="name" placeholder="Enter your first name" className="text-black py-1 px-2 h-10  border focus:shadow-lg w-96 focus:border-b focus-bg-gray-100"/>
                                           </div>
                                        </div>
                                     </div>

                                       
                                     <div className="flex justify-center items-center">
                                         <div className=" flex-col  border-b mb-2 pb-2">
                                             <div>
                                                 <label for="name" className=" text-gray-500 uppercase text-xl ">
                                                   message <span className="text-red-500 font-bold">*</span>
                                                 </label>
                                             </div>
                                             <div>
                                                 <textarea name="message" rows="5" placeholder="Entrer votre message ici ...." 
                                                   className="text-black py-1 px-2 h-10  border focus:shadow-lg w-96 h-20 focus:border-b focus-bg-gray-100"></textarea>
                                             </div>
                                        </div>
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <button type="submit" className="flex w-96 py-3 items-center rounded justify-center bg-cyan-800 text-white uppercase text-xl ">
                                               S'inscrire
                                            </button>
                                        </div>
                                  </div>
                            </form>
                        </div>
                    </div>
                </div>
  )
}

export default Message