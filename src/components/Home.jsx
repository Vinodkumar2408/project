import { useEffect, useState } from "react";
import Articleslist from "./Articleslist";

const Home = () => {

    const [articles, setarticles] = useState(null);


    useEffect(()=>{
        if(localStorage.getItem("articles") == null)
        {
            localStorage.setItem("articles" , "[]" );
            console.log("creayted");
        }
        else
        {
            let a = localStorage.getItem("articles");
            a = JSON.parse(a);
            setarticles(a);
        }
    } , [] )



    return ( 
        <div>
            <h1> List of all Articles </h1>
            <hr />

            <Articleslist articles={articles}/>


        </div>
    );
}
export default Home;