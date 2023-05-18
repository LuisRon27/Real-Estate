import React from 'react';
import './featured.css';
import Heading from './heading';
import FeaturedCard from './featuredCard';

const Featured = () => {
    return (
        <>
            <section className='featured background'>
                <div className='container'>
                    <Heading title='Featured Property Types' subtitle='Find All Type of Property.'></Heading>
                    <FeaturedCard></FeaturedCard>
                </div>
            </section>
        </>
    );
}

export default Featured;
