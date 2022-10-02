import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Articleslist from "./Articleslist";

const Searchpage = () => {
    const [articles, setArticles] = useState(null);
    let {searchVal} = useParams();
    console.log(searchVal);

    useEffect(()=>{
            let a = localStorage.getItem("articles");
            a = JSON.parse(a);
            setArticles(a);
    } , [] )
    
    return ( 
        <div>
            <h1>hello</h1>
        {articles && <Articleslist articles={articles.filter((article)=>{ return article.title.includes(searchVal)})} />}
        </div>

    );
}
export default Searchpage;