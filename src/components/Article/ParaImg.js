import React from "react";


const articles =  [
    {
        id: "1",
        text:"Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.",
        imageSrc:"https://cdn.pixabay.com/photo/2022/06/13/19/18/bird-7260552_960_720.jpg",
    },
    {
        id: "1",
        text:"Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.",
        imageSrc:"https://cdn.pixabay.com/photo/2022/06/13/19/18/bird-7260552_960_720.jpg",
    },
    {
        id: "1",
        text:"Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.",
        imageSrc:"https://cdn.pixabay.com/photo/2022/06/13/19/18/bird-7260552_960_720.jpg",
    },
    {
        id: "1",
        text:"Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.",
        imageSrc:"https://cdn.pixabay.com/photo/2022/06/13/19/18/bird-7260552_960_720.jpg",
    }
]
function ParaImg(){
    return(
        <ol>
            {
                 articles.map((article)=>{
                    <li class="py-3">
                        {article.text}
                       <img src={article.imageSrc} className="cover h-[70%] w-full" />
                    </li>
                 })
            }
            
        </ol>
    )
}
export default ParaImg;