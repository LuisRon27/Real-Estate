import React from 'react';
import Back from '../components/back';
import assets from '../assets/services.jpg';
import '../styles/contact.css';

const Contact = () => {
    return (
        <>
            <section className='contact mb'>
                <Back name="Contact Us" title="Get Helps & Friendly Support" cover={assets}></Back>
                <div className='container'>
                    <form action="" className='shadow'>
                        <h4>Fillup The Form</h4>
                        <div>
                            <input type="text" placeholder="Name" name="" id="" required />
                            <input type="email" placeholder="Email" name="" id="" required />
                        </div>
                        <input type="text" placeholder="Subject" name="" id="" />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <button type="submit">Submit Request</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
