import React from 'react'
import contact from "../Images/appoint.png"
import Animated from '../Animated'

function Contact() {
    return (
        <div className="container-fluid">
            <div className="row about-row">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 service">
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                    <Animated><div className="head-service"><img classname="service-image" src={contact} /><h1 className="service-heading">Contact</h1></div></Animated>
                </div>
            </div>
            <div > 
                <h1 className="contact-head">Get In Touch</h1>
            </div>
            <div className="row contact-card">
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 contact-enquiry">
                    <h4>For enquiry &amp; appointment Bookings</h4>
                    <p>Whatsapp us:</p>
                    <button>7708282837</button>
                    <p>Call us :7708282837</p>
                    <p>email us :</p>
                    <a className="email" href="mailto:neosmiledentalomr@gmail.com">neosmiledentalomr@gmail.com</a>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <h4>We are opening hours are:</h4>
                    <p>(Mon – Fri) 9am – 9pm</p>
                    <p>(Sat- Sun) 9am – 5pm</p>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                    <h4>We are located conveniently at:</h4>
                    <p>No.30 Annai Indira Gandhi Street, Shollinganallur</p>
                    <p>Chennai-600097</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact