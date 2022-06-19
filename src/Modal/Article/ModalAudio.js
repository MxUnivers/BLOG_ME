import React from 'react'

const ModalAudio = (props) => {
  return (
    <div  style={{visibility: props.audio == true ? "visible" : "hidden" }} className="fixed  h-full w-full transition ease-in-out duration-500 top-0 right-0  z-10 flex items-center justify-center bg-gradient-to-t from-black to-transparent p-2 ">
        <div className="relative flex-col items-center  my-3 mx-3 py-7 px-2 bg-white rounded ">
            <div className="border-b my-1 py-1 w-full font-bold uppercase">
                titre de la musique 
            </div>
            <img src="https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg" className="w-full cover h-[180px] " />
            <audio controls>
                <source src="Prends_mes_ambitions(256k).mp3" type="audio/mpeg"/>
            </audio>
            <button type="button"   className="bg-green-500 text-white py-2 px-1 w-full  rounded-2xl hover:bg-gray-600 my-1">Jouer audio</button>
            <button type="button"   className="bg-gray-500 text-white py-2 px-1 w-full  rounded-2xl hover:bg-gray-600 my-1">Arreter audio</button>
            <button type="button" onClick={props.HideAudio}  className="absolute top-1 right-3 border rounded-[50%] text-black p-3 uppercase transition ease-in-out duration-300 ">x</button>
        </div>
    </div>
  )
}

export default ModalAudio ;