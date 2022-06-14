import  React from  "react";

const  services = [
    {
        id: 1 , name :"Informatique" , imageSrc :"https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 2 , name :"Animation" , imageSrc :"https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        id: 3 , name :"design" , imageSrc :"https://images.pexels.com/photos/3094799/pexels-photo-3094799.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
    
]
function Services({Title}){
    return(
        <div className="container-fluid bg-gray-100 pt-10 mt-2 mb-10 flex flex-col text-black border-b ">
             <div className="flex flex-col items-center justify-center">
                 <div className="flex items-center justify-center">
                     <div className="flew py-2 text-black text-2xl border-b-2xl pb-2 mb-1 ">
                         <h3 className="font-bold uppercase underline">{Title}</h3>
                     </div>
                 </div>



                <div className="container px-4 mx-auto bg-white">
                    <div className="flex flex-wrap m-4 ">
                          
                        <div className="relative xs:flex-col sm:flex lg:flex p-3 flex  justify-center overflow-x-auto container w-full">
                             
                             {
                                 services.map((service)=>
                                    <div className="relative rounded flex items-center h-[350px] w-[250px] hover:shadow-dashboard" >

                                        <div className="rounded">
                                             <img className="rounded h-[200px] w-[200px] rounded-[50%] " src={service.imageSrc} />
                                        </div>
                                        <div className="absolute right-20 bottom-[150px]">
                                            <button type="button" className="border py-2 px-3 text-white border-gray-100 uppercase">{service.name}</button>
                                        </div>

                                    </div>
                                 )
                             }
                             <button type="button" className="absolute p-3 left-0 top-[50%] flex items-center
                                   justify-center rounded-[50%]  bg-cyan-800 text-white font-extrabold text-2xl
                                      active:bg-cyan-900">
                                        {"<"} 
                             </button>

                             <button type="button" className="absolute p-3 right-0 top-[50%] flex items-center
                             justify-center rounded-[50%]  bg-cyan-800 text-white font-bold font-extrabold text-2xl
                                active:bg-cyan-900">
                                  {">"} 
                       </button>

                             
                        </div>
                       
                    </div>
                </div>
                   
​
             </div>
        </div>
    )
}
export  default Services;