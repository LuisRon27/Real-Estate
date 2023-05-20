import React from 'react';
import Hero from '../components/hero';
import Featured from '../components/featured';
import Recent from '../components/recent';
import Awards from '../components/awards';
import Location from '../components/location';
import Team from '../components/team';
import Price from '../components/price';




const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Featured></Featured>
            <Recent></Recent>
            <Awards></Awards>
            <Location></Location>
            <Team></Team>
            <Price></Price>
        </div>
        
    );
}

export default Home;
