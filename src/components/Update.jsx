import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Update = () => {

    let {id} = useParams();
    let {data : movie , pending , error} = useFetch("http://localhost:4000/movies/" + id );
    
    const [movieName, setmovieName] = useState("");
    const [hero, sethero] = useState("");
    const [director, setdirector] = useState("");
    const [genere, setgenere] = useState("");
    const [ratings, setratings] = useState("");
    const [poster, setposter] = useState("");
    const [trailer, settrailer] = useState("");
    const [story, setstory] = useState("");

    let history =  useHistory();

    useEffect(()=>{
        if(movie)
        {  
            setmovieName(movie.movieName);
            sethero(movie.hero);
            setdirector(movie.director);
            setgenere(movie.genere);
            setratings(movie.rating);
            setposter(movie.poster);
            settrailer(movie.trailer)
            setstory(movie.storyLine);
        }
    } , [movie] );

    let handleUpdate = (e)=>{
        e.preventDefault();

        let replacingMovie = {movieName,hero,director,genere,ratings,trailer,poster,story};

        fetch(`http://localhost:4000/movies/${id}` , 
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(replacingMovie)
        } 
        )
        .then(()=>{
            alert("movie replaced");
            history.push("/");
        })

    }

    
    return ( <div className="add">
    <h1>Update a movie {id}</h1>
    <hr />
    
    <form onSubmit={handleUpdate}>
        <label htmlFor="">Movie Name</label>
        
        <input type="text"
            value={movieName}
            onChange={(e)=>{ setmovieName(e.target.value); }}
        />
        
        
        
        <label htmlFor="">Hero</label> <input type="text" value={hero}
            onChange={(e)=>{ sethero(e.target.value); }}/> 
        
        <label htmlFor="">Director</label> <input type="text" value={director}
            onChange={(e)=>{ setdirector(e.target.value); }}/> 
        
        <label htmlFor="">Genere</label> <input type="text" value={genere}
            onChange={(e)=>{ setgenere(e.target.value); }}/> 
        
        <label htmlFor="">Rating</label> <input type="number" step="0.1" max="5" min="0.1" value={ratings}
            onChange={(e)=>{ setratings(e.target.value); }}/> 
        
        <label htmlFor="">Movie Poster</label> <input type="url" value={poster}
            onChange={(e)=>{ setposter(e.target.value); }} /> 
        
        <label htmlFor="">Movie trailer</label> <input type="url" value={trailer}
            onChange={(e)=>{ settrailer(e.target.value); }}/> 
        
        <label htmlFor="">Synopsis</label> 
        
        <textarea cols="30" rows="10" value={story}
            onChange={(e)=>{ setstory(e.target.value); }}></textarea>
        
        <input type="submit" value="update" />

    </form>

</div>  );
}

export default Update;