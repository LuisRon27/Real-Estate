import React from 'react';
import Back from '../components/back';
import assets from '../assets/about.jpg';
import Heading from '../components/heading';
import "../styles/about.css";

const About = () => {
    return (
        <>
            <section className='about'>
                <Back name="About Us" title="About Us - Who We Are?" cover={assets}></Back>
                <div className='container flex mtop'>
                    <div className='left row'>
                        <Heading title='Our Agency Story' subtitle='Check out our company story and work process' ></Heading>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        <button className='btn2'>Learn More</button>
                    </div>
                    <div className='right row'>
                        <img src="./immio.jpg" alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
