import React from 'react';
import Hero from '../components/hero';
import Featured from '../components/featured';
import Recent from '../components/recent';
import Awards from '../components/awards';
import Location from '../components/location';




const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Featured></Featured>
            <Recent></Recent>
            <Awards></Awards>
            <Location></Location>
        </div>
        
    );
}

export default Home;
