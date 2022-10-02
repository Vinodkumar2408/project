import { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar= () => {

    const [searchVal, setsearchVal] = useState("");

    return ( 

        <nav>
            <div>
                <Link to={`search${searchVal}`}>
                <button> &#128269; </button>
                </Link>

                <input type="search" value={searchVal}
                onChange={(e)=>{setsearchVal(e.target.value)}}/>
                
                
                <button onClick={()=>{setsearchVal("")}}> clear </button>
            </div>
            <div>
                <Link to="/add">New Post</Link>
                <Link to="/">Published</Link>
            </div>
        </nav>
    );
}

export default Navbar