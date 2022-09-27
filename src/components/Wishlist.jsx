import { useState } from "react";
import { useEffect } from "react";
import Movieslist from "./Movieslist";

const Wishlist = () => {

    let[wishList , setWishlist] =  useState(null);

    useEffect(()=>{
        let wish = localStorage.getItem("wishList");
        wish = JSON.parse(wish);
        setWishlist(wish);
    } , [])



    return (  
        <div>

        { wishList && <Movieslist movies={wishList} title="Movies added to favorites"/>}



        </div>
    );
}
export default Wishlist;