import React from 'react';
import "./awards.css";
import Heading from './heading';
import { awards } from '../Models/Data';

const Awards = () => {
    return (
        < >
            <section className='awards padding'>
                <div className='container'>
                    <Heading title='Our Awards' subtitle='Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services'></Heading>


                    <div className='content grid4 mtop'>
                        {awards.map((val, index) => (

                            <div className='box' key={index}>
                                <div className='icon'>
                                    <span> {val.icon} </span>
                                </div>
                                <h1> {val.num} </h1>
                                <p> {val.name} </p>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Awards;
