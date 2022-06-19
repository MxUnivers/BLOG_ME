import React from "react";
import  HeaderArticle from  "./HeaderArticle";
import  ListArticles from "./ListArticles" ;
import  OtherArticles from "./OtherArticles" ;

// Articles de catégorie (soit , informatique , religien , culture  , nature  ,  ) 
function ArticleCart({title}) {
    return (
        <section>
            <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-5">
                <div className="mx-auto container">
                    <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 border-b">{title}</h1>
                    <div className="mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                             {/* HeaderArticle pour l'article en vedette  */}
                            <HeaderArticle/>
                             {  /* ListArticles pour les différents article rénumérés */  }
                            <ListArticles />
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticleCart;
