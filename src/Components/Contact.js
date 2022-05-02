import React from 'react'
import contact from "../Images/appoint.png"
import Animated from '../Animated'

function Contact() {
    return (
        <Animated>
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
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 contact-enquiry">
                        <h5 className="contact-topics">For enquiry &amp; appointment Bookings</h5>
                        <p className="us">Whatsapp us:</p>
                        <a className="btn link" href='https://wa.me/7708282837' target="_blank">7708282837</a>
                        <p className="callus">Call us :7708282837</p>
                        <p className="zoop">email us :</p>
                        <a className="email ding" href="mailto:neosmiledentalomr@gmail.com">neosmiledentalomr@gmail.com</a>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 contact-time">
                        <h5 className="contact-topics">We are opening hours are:</h5>
                        <p className="us">(Mon – Fri) 9am – 9pm</p>
                        <p className="us">(Sat- Sun) 9am – 9pm</p>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <h5 className="contact-topics">We are located conveniently at:</h5>
                        <p className="us"><a id="locate-contact" href="https://www.google.com/maps/place/NEOSMILE+DENTAL+AND+IMPLANT+CENTRE/@12.8875614,80.2285973,15z/data=!4m12!1m6!3m5!1s0x0:0x90a145a0ad547d96!2sNEOSMILE+DENTAL+AND+IMPLANT+CENTRE!8m2!3d12.8875614!4d80.2285973!3m4!1s0x0:0x90a145a0ad547d96!8m2!3d12.8875614!4d80.2285973" target="_blank">No.30 Annai Indira Gandhi Street, Shollinganallur</a></p>
                        <p className="us">Chennai-600097</p>

                    </div>
                </div>
            </div>
        </Animated>
    )
}

export default Contact