import { Link } from "react-router-dom";

const Movieslist = ({movies , title , deleteMovie}) => {


    let handleWishlist = (movie)=>{

        let wish = localStorage.getItem("wishList");
        wish = JSON.parse(wish);

        var isPresent = wish.some((WishMovie)=>{ return WishMovie.id ==  movie.id });
        console.log(isPresent);

        if(isPresent==true)
        {
            alert("Movie already added to fav");
            console.log(wish.indexOf(movie));;
        }
        else
        {
            wish.push(movie);
            wish = JSON.stringify(wish);
            localStorage.setItem("wishList" , wish);
        }
        
    }




    return ( 
        <div className="movies-list">
            <h1> {title} </h1>
            {
                movies.map((movie) => {
                    return (
                        <div key={movie.id} className="movie">
                        <Link to={`/moviedetails${movie.id}`}>
                            
                                <h1>Movie name : {movie.movieName} </h1>
                                <h2>Hero : {movie.hero}</h2>
                                <h2>Genere : {movie.genere}</h2>
                            
                        </Link>

                        <button onClick={()=>{handleWishlist(movie)}}> 💓  </button>
                        </div>
                        )
                    
                })
            }
        </div> 
        
    );
}
export default Movieslist;