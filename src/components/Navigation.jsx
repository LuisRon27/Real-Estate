import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [navList, setnavList] = useState(false);

    return (
        <div className=' flex header' >
            
            <div className='logo'>
                <img src="https://biz.prlog.org/letsrent/logo.jpg" alt="Logo" />
            </div>

            <nav className='nav'>
                <ul className={navList? "small" : "flex"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>
            </nav>

            <div className='button flex'>
                <h4>
                    <span>2</span> My List
                </h4>
                <button className='btn1'>
                    <i className='fa fa-sign-out'></i> Sign In
                </button>
            </div>

            <div className='toggle'>
                {/** cambia el estado de false a true*/}
                <button onClick={() => setnavList(!navList)}>
                    {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </div>
            
        </div>
    );
}

export default Navigation;
