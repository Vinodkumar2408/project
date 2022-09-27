
import { useEffect } from 'react';
import Movieslist from './Movieslist';
import useFetch from './useFetch';

const Home = () => {

  useEffect(()=>{
    if( localStorage.getItem("wishList")== null)
    {
        localStorage.setItem("wishList" , "[]" );
    }

  } , [] )


  
    let {data : movies  , pending , error} = useFetch("http://localhost:4000/movies");

    return ( 
      <div className='home'>
        
        {error && <h1> { error } </h1>}
        
        {pending && <div className='loader'></div> }
            
      { movies && <Movieslist movies={movies} title="All the movies"/>}
  
      </div>
    );
}
export default Home;