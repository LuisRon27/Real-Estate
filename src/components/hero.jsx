import React from 'react';
import './hero.css';
import Heading from './heading';

const Hero = () => {
    return (
        <div>
            <section className='hero'>
                <video autoPlay muted loop>
                    <source src={require("../assets/videoHome.mp4")} type="video/mp4" />
                </video>
                <div className='container'>

                    <Heading title='Search Your Next Home' subtitle='find new & featured property located in your local city.' ></Heading>

                    <form className='flex'>

                        <div className='box'>
                            <span>City/Street</span>
                            <input type="text" placeholder="Location" />
                        </div>

                        <div className='box'>
                            <span>Property Type</span>
                            <input type="text" placeholder="Property Type" />
                        </div>

                        <div className='box'>
                            <span>Price Range</span>
                            <input type="text" placeholder="Price Range" />
                        </div>

                        <div className='box'>
                            <h4>Advance Filter</h4>
                        </div>

                        <button className='btn'>
                            <i className='fa fa-search'></i>
                        </button>

                    </form>

                </div>
            </section>
        </div>
    );
}

export default Hero;
