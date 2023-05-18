import React from 'react';
import { featured } from '../Models/Data';

const FeaturedCard = () => {
    return (
        <>

            <div className='content grid5 mtop'>
                {featured.map((item, index) => (

                    <div className='box' key={index}>
                        <img src={item.cover} alt="logo" />
                        <h4> {item.name} </h4>
                        <label> {item.total} </label>
                    </div>
                    
                ))}
            </div>
        </>
    );
}

export default FeaturedCard;
