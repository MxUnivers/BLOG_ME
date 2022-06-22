
import  React, { useEffect ,  useState } from  "react";
import  {FaFileAudio} from  "react-icons/fa";
import {FaVideo} from  "react-icons/fa";
/* Composant  */
import Navbar from "../components/Navbar";
import  Footer from  "../components/Footer";
import Subscribe from "../components/Article/Subscribe";
import  Steps from  "../components/Article/Steps";
import IntroVideo from "../components/Article/IntroVideo";
import Social from "../components/Social";
import  Author from  "../components/Article/Author";
import ParaImg from  "../components/Article/ParaImg";

/* Modal */
import  ModalAudio  from "../Modal/Article/ModalAudio"; 
import  ModalVideo  from "../Modal/Article/ModalVideo"; 
import OtherArticles from "../components/Article/OtherArticle";




function Article(){
	const [audio ,  setAudio] = useState(false);

	const [video ,  setVideo] = useState(false);


    /* modal video  */
	function showAudio(){
		setAudio(true);
		setVideo(false);
	}
	function HideAudio(){
		setAudio(false);
		setVideo(false);
	}
	/* function Modal video */
	function showVideo(){
		setVideo(true);
		setAudio(false);
	}
	function HideVideo(){
		setVideo(false);
		setAudio(false);
	}
	



    return(
		<div>

		     {/* Navbar    **************************** */}
		     <Navbar/>
		     <div class="bg-gray-100 font-sans leading-normal tracking-normal">
			      {/* ModalAudio pour lire l'audio ***********************/}
				     <ModalAudio audio={audio} HideAudio={HideAudio} />
				  {/* ModalAudio pour lire l'audio ***********************/}
				    <ModalVideo video={video} showVideo={showVideo} HideVideo={HideVideo} />
					{/* les médias sociaux  *****************************/}
					<Social/>
				{/*Container*/}
				<div class="container w-full md:max-w-3xl mx-auto pt-20">
				   <div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily:"Georgia,serif"}}>
				     {/*Title*/}
					   <div class="font-sans">
					       {/*  bouton de retour */}
						   <div className="border-b border-t my-1 py-2">
						       <button onClick={()=> window.history.back()}  class="text-base rounded-2xl py-1 px-3 dark:bg-blue-800  text-white md:text-sm  font-bold">
						          retour 
								</button>
							</div>
						    <h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">Welcome to Minimal Blog</h1>
							<p class="text-sm md:text-base font-normal text-gray-600">Published 19 February 2019</p>
							<div className="relative flex space-x-2">
							   <button type="button" onClick={showAudio}  className="rounded p-1 hover:shadow-lg bg-green-100">   
							      <FaFileAudio className="text-cyan-900 h-11 w-11 "/>
								</button>
								 <button type="button" onClick={showVideo}  className="rounded bg-red-200 text-red-500 p-1 hover:bg-red-300 hover:shadow-lg bg-green-100">   
							         <FaVideo className="text-cyan-900 h-11 w-11 "/>
								</button>
							</div>
					   </div>


					   {/*Post Content*/}
					   <p class="py-6">
					      👋 Welcome fellow <a class="text-green-500 no-underline hover:underline" href="https://www.tailwindcss.com">Tailwind CSS</a> and miminal monochrome blog fan. This starter template provides a starting point to create your own minimal monochrome blog using Tailwind CSS and vanilla Javascript.
					   </p>
					   {/*INtroVideo pour mettre en vedette une video de presentio de l'article ************************/}
					   <IntroVideo/>
					   {/*image de l'article */}
					   <img src="https://cdn.pixabay.com/photo/2022/06/13/19/18/bird-7260552_960_720.jpg" className="my-2 cover w-full h-400" />
					   {/** Les format d'articles de Mx Bog */}
					   <Steps/>						
						{/* Parraphe-Image les articles paragrphes *************/}		
						<ParaImg/>				
						
						<blockquote class="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>					
			 {/*Post Content*/}
		         </div>

			   {/*Tags */}
			   <div class="text-base md:text-sm text-gray-500 px-4 py-6">
			       Cliquer ici pour les autres articles <a href="/more-articles" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> . <a href="#" class="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
		       </div>

			   {/*Divider*/}
			   <hr class="border-b-2 border-gray-400 mb-8 mx-4"/>
			   {/*Author */}
			   <Author/>
				{/* Divider */}
				<hr class="border-b-2 border-gray-400 mb-8 mx-4"/>
				   
				   {/*Next & Prev articles */}
				<div class="font-sans flex justify-between content-center px-4 pb-12">
				    <div class="text-left">
					    <button type="button" class=" py-1 px-3 rounded-2xl bg-blue-200 text-blu-800 cursor-pointer text-xs md:text-sm font-normal text-gray-600">
				            {"<"} Previous Post
						</button>
						<br/>
						{/* Articles précedent */}	
						
					</div>

					<div class="text-right">
					    <button type="button" class="py-1 px-3 rounded-2xl bg-blue-200 text-blu-800 cursor-pointer text-xs md:text-sm font-normal text-gray-600">
				            Next Post {">"}
						</button>
						<br/>
						{/*Article suivant */}
						
					</div>
				</div>
				{/* Other articles ********************************* */}
				<OtherArticles/>
				{/*Subscribe*******************/}
				<Subscribe/>


				
			{ /*Next & Prev Links-->*/}
		    </div>
		</div>


		<Footer/>
	</div>
    )
}
export default Article;
