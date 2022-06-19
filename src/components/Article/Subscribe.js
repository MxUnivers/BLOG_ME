

import React from "react";


function Subscribe(){
    return(
        <div className="container px-4 mb-3">
			<div className="font-sans bg-gradient-to-b from-blue-300 to-gray-200 rounded-lg shadow-xl p-4 text-center">
				
				<h3 className="font-bold break-normal text-gray-600 text-sm md:text-base">nous vous offrirons plusieurs articles pour votre informations</h3>
				<h2 className="font-bold break-normal text-xl md:text-3xl">Rejoignez nous pour plus d'informations</h2>
				<div className="w-full text-center pt-4">
					<form action="#">
						<div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
							<input type="email" placeholder="youremail@example.com" className="flex-1 mt-4 appearance-none border border-gray-400 rounded shadow-md p-3 text-gray-600 mr-2 focus:outline-none"/>
							<button type="submit" className="flex-1 mt-4 block md:inline-block appearance-none dark:bg-blue-800 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-blue-900">S'inscrire</button>
						</div>
					</form>					
				</div>
			</div>
		</div>
    )
}
export default Subscribe;