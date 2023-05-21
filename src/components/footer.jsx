import React from 'react';
import './footer.css';
import { footerlist } from '../Models/Data';
import logo from '../assets/logo.png' 

const Footer = () => {
    return (
        <>
            <section className='footerContact'>
                <div className='container'>
                    <div className='send flex'>
                        <div className='text'>
                            <h1>Do You Have Questions ?</h1>
                            <p>We'll help you to grow your career and growth.</p>
                        </div>
                        <button className='btn5'>Contact Us Today</button>
                    </div>
                </div>
            </section>

            <footer>
                <div className='container'>
                    <div className='box'>
                        <div className='logo'>
                            <img src={logo} alt="Logo" />
                            <h2>Do You Need Help With Anything?</h2>
                            <p> Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

                            <div className='input flex'>
                                <input type="email" placeholder="Email Address" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                    {footerlist.map((val,index) => {
                        return(
                            <div className='box' key={index}>
                                <h3> {val.title} </h3>
                                <ul>
                                    {val.text.map((item) => (
                                        <li> {item.list} </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </footer>
            <div className='legal'><span>© 2023 LetsRent. Designd By LuisRon.</span></div>
        </>
    );
}

export default Footer;
