import React ,{useState} from 'react'

const Articles = ({Legend}) => {
    const [articles, setSlides] = useState([
        {
          id: 1,
          title: "Les meilleurs jeu de la saison  , minicraft",
          href:"#",
          description: "les jeux vidéos en pleine expansion",
          imageSrc:
            "https://cdn.pixabay.com/photo/2014/11/13/15/24/minecraft-529466__340.jpg",
        },
        {
          id: 2,
          title: "religion",
          href:"#",
          description: "La bible , un document contenant de grands mistères",
          imageSrc:
            "https://cdn.pixabay.com/photo/2017/03/02/05/14/bible-2110439__340.jpg",
        },
        {
          id: 3,
          title: "santé",
          href:"#",
          description: "rien de mieux que d'être en bonne santé",
          imageSrc:
            "https://cdn.pixabay.com/photo/2014/02/27/16/09/microscope-275984__340.jpg",
        }
          
      ]);
  return (
    <section className="container my-8 flex-col items-center justify-center py-4 border-t pt-6">

    <div className="container flex px-10  relative">
       <div  className="py-2 flex justify-left text-2xl border-b mb-1 ²items-center text-base font-bold uppercase flex items-left justify-left">
         {Legend}          
        </div>
        <div className="flex items-right absolute right-0 top-1">
            <a href='/more-articles' type="button" className="bg-gray-100 py-1 px-2 text-black underline hover:font-bold">voir plus ..</a>
        </div>
    </div>

  <div className="container px-4 mx-auto bg-gray-100">
    <div className="flex flex-wrap -m-4 ">

        
    {
      articles.map((article)=>
          <article class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                 <a href="#" href="#" class="flex flex-wrap no-underline hover:no-underline">
                   <img src={article.imageSrc} class="h-64 w-full rounded-t pb-6"/>
                   <p class="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
                   <div class="w-full font-bold text-xl text-gray-900 px-6">{article.title}</div>
                   <p class="text-gray-800 font-serif text-base px-6 mb-5">
                        {article.description}
                   </p>
                 </a>
              </div>
              <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                  <div class="flex items-center justify-between">
                      <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author" tabindex="0"/>
                      <p class="text-gray-600 text-xs md:text-sm">{article.date}</p>
                  </div>
              </div>
          </article>
      )
  }
    </div>
  </div>
</section>
  )
}

export default Articles ;