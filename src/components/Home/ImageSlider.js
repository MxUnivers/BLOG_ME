

import React, { useEffect, useRef, useState } from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28","#0088FE", "#00C49F", ];
const delay = 5000;

const ImageSlider = () => {
  const [slides, setSlides] = useState([{
      id: 1,
      title: "Jeux",
      href:"#",
      description: "les jeux vidéos en pleine expansion",
      coverPicture:
        "https://cdn.pixabay.com/photo/2014/11/13/15/24/minecraft-529466__340.jpg",
    },{
      id: 2,
      title: "religion",
      href:"#",
      description: "La bible , un document contenant de grands mistères",
      coverPicture:
        "https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439__340.jpg",
    },{
      id: 3,
      title: "",
      href:"#",
      description: "Rien de vieux que d'être en bonne santé",
      coverPicture:
        "https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984__340.jpg",
    },{
      id: 3,
      title: "technologie",
      href:"#",
      description: "La technologie en pleine expansion",
      coverPicture:
        "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275__340.jpg",
    },{
        id: 4,
        title: "Voyage",
        href:"#",
        description: "Aller vers de nouveaux horizons",
        coverPicture:
          "https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759__340.jpg",
      },{
        id: 5,
        title: "la nature",
        href:"#",
        description: "Decouverte extrordinaire",
        coverPicture:
          "https://cdn.pixabay.com/photo/2016/12/05/11/39/zebras-1883654__340.jpg",
      },
  ]);

  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="w-[100%] h-[65vh] overflow-hidden m-0 relative">
      <div className="opacity-80 bg-black absolute top-0 left-0 right-0 bottom-0"></div>
      <div
        className="whitespace-nowrap"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((slide, index) => (
          <div className="inline-block h-[500px] w-full" key={index}>
            <img
              src={slide.coverPicture}
              className="w-full cover  opacity-60"
            />
            <div className="block w-full mx-auto">
              <div className="absolute top-[20%] sm:text-center lg:text-center w-full">
                <h1 className="flex items-center justify-center mx-auto w-[800px] truncate text-6xl font-extrabold text-center text-white">
                  <span className=" xl:inline">{slide.title}</span>
                </h1>
                <div className="flex items-center justify-center mx-auto text-center w-[800px] truncate text-3xl text-white mt-5">
                  {slide.description}
                </div>
                <div className="flex items-center justify-center mx-auto text-center  text-2xl mt-5">
                     <a href="" className="bg-yellow-500 text-black py-2 px-3 rounded hover:underline hover:bg-yellow-600  hover:text-gray-100  ">Voir Sujet</a>
                </div>
                <div className="flex item-center justify-center sm:mt-8 sm:flex sm:justify-center lg:justify-center">
                  <div className="block rounded-full text-white bg-green-600 hover:bg-green-700">
                  
                  {/* <a
                      href={`/posts/${slide._id}`}
                      className="flex items-center justify-center px-8 py-3 text-base font-medium md:py-4 md:text-lg md:px-10 text-center"
                    >
                      Voir à l'article
                    </a> */
                  }
                  </div>
                </div>
              </div>
              
              


            </div>
          </div>
        ))}
      </div>

      <div className="absolute z-10 bottom-10 w-full text-center flex justify-center items-center space-x-2 rounded-md cursor-pointer">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`h-[20px] w-[20px] rounded-full ${
              index === idx ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;