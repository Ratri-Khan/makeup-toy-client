// import React from 'react';

// import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner";
import MakeupGallary from "../MakeupGallary";
import Review from "../Review";
import ShopCategory from "../ShopCategory";
import FeaturedHeros from "../features";

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <MakeupGallary></MakeupGallary> 
            <ShopCategory></ShopCategory>
            <FeaturedHeros></FeaturedHeros>
            <Review></Review>
        </div>
    );
};

export default Home;