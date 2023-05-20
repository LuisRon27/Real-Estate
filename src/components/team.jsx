import React from 'react';
import "./team.css";
import Heading from './heading';
import { teamlist } from '../Models/Data';

const Team = () => {
    return (
        <>
            <section className='team background'>
                <div className='container'>
                    <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'></Heading>

                    <div className='content mtop grid3'>
                        {teamlist.map((val, index) => {
                            return (
                                <div className='box' key={index}>
                                    <button className='btn3'>{val.list} Listings</button>
                                    <div className='details'>
                                        <div className='img'>
                                            <img src={val.cover} alt="team" />
                                            <i className='fa fa-circle-check'></i>
                                        </div>
                                        <i className='fa fa-location-dot'></i>
                                        <label htmlFor='' > {val.address} </label>
                                        <h4> {val.name} </h4>

                                        <ul>
                                            {val.icon.map((icon, index) => {
                                                return (
                                                    <li key={index}> {icon} </li>
                                                )
                                            })}
                                        </ul>

                                        <div className='button flex'>
                                            <button id='Message'><i className='fa fa-envelope'></i> Message</button>
                                            <button id='btn4' className='btn4'><i className='fa fa-phone-alt'></i></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
