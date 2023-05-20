import React from 'react';
import Heading from './heading';
import PriceCard from './priceCard';
import "./price.css";

const Price = () => {
    return (
        <>
            <section className='price padding'>
                <div className='container'>
                    <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores'></Heading>
                    <PriceCard></PriceCard>
                </div>
            </section>
        </>
    );
}

export default Price;
