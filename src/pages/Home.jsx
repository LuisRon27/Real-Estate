import React from 'react';
import Hero from '../components/hero';
import Featured from '../components/featured';
import Recent from '../components/recent';




const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Featured></Featured>
            <Recent></Recent>
        </div>
        
    );
}

export default Home;
