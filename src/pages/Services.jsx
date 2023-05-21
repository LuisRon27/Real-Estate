import React from 'react';
import Back from '../components/back';
import assets from '../assets/services.jpg';
import FeaturedCard from '../components/featuredCard';

const Services = () => {
    return (
        <>
            <section className='services mb'>
                <Back name="Services" title="Services -All Services" cover={assets}></Back>
                <div className='featured container'>

                    <FeaturedCard></FeaturedCard>
                </div>
            </section>
        </>
    );
}

export default Services;
