import  React , {useState  ,  useEffect} from  "react";


function ModalVideo(props){

    return(
        <div  style={{visibility: props.video == true ? "visible" : "hidden" }} className="fixed  h-full w-full transition ease-in-out duration-500 top-0 right-0  z-10 flex items-center justify-center bg-gradient-to-t from-black to-transparent p-2 ">
           {/* Video iframe */}
           
              <iframe onClik={props.showVideo} width="560" height="315" src="https://www.youtube.com/embed/MLBFnWGNqZ8" autoplay title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                 
                <button type="button" onClick={props.HideVideo}  className="absolute top-5 font-bold right-3 border rounded-[50%] text-black bg-gray-100 p-3 uppercase transition ease-in-out duration-300 ">x</button>

           
        </div>
    )
}
export  default ModalVideo;