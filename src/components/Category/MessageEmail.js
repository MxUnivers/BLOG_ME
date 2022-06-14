import React from "react";



function MessageEmail(){
    return(
        <div class="container font-sans bg-blue-100 rounded mt-8 p-4 md:p-24 text-center shadow-lg">
            <h2 class="font-bold break-normal text-2xl md:text-4xl">Envoyer nous votre email svp</h2>
            <h3 class="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Cele ne vous prendra qu'<span className="font-bold underline">une minute</span></h3>
            <div class="w-full text-center pt-4">
                <form action="#">
                    <div class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
                        <input type="email" placeholder="youremail@example.com" class="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"/>
                        <button type="submit" class="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-cyan-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-cyan-400">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MessageEmail;