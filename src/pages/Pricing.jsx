import React from 'react';
import Back from '../components/back';
import assets from '../assets/pricing.jpg';
import PriceCard from '../components/priceCard';

const Pricing = () => {
    return (
        <>
            <section className='services mb'>
                <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={assets}></Back>
                <div className='container price'>
                    <PriceCard></PriceCard>
                </div>
            </section>
        </>
    );
}

export default Pricing;
