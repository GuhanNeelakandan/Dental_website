import React from 'react'
import smile from "../Images/smile.png"
import location from "../Images/location.gif"

function Footer() {
    return (
        <div className="container-fluid bg">
            <div className="row align-item-center foot-row">
                <div className="text-center mt-4 p-1 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <img src={smile} />
                </div>
                <div className="text-center mt-4 p-1 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 open-timing">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="open-font-size">We are Open On:</h5>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col">
                                    <h5 className="time-font-size">MON-SUN <br/>9am-9pm</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <h4 className="locate-size">Our Location</h4>
                    <h5 className="locate-add"><img className="location-img" src={location}/> 
                    <a id="locate" href="https://www.google.com/maps/place/NEOSMILE+DENTAL+AND+IMPLANT+CENTRE/@12.8875614,80.2285973,15z/data=!4m12!1m6!3m5!1s0x0:0x90a145a0ad547d96!2sNEOSMILE+DENTAL+AND+IMPLANT+CENTRE!8m2!3d12.8875614!4d80.2285973!3m4!1s0x0:0x90a145a0ad547d96!8m2!3d12.8875614!4d80.2285973" target="_blank">No.30 annai indira gandhi street, shollinganallur chennai-600097</a></h5>
                </div>
                <div className="text-center mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <h4 className="touch">Get in touch</h4>
                    <h5 className="whatsapp">Via whatsapp</h5>
                    <a className="btn btn-sm-2 btn-warning m-2 butt" href="https://wa.me/7708282837" target="_blank">7708282837</a>
                    <h5 className="call">or call 7200943938<br/><a className="email" id="mail" href="mailto:neosmiledentalomr@gmail.com">neosmiledentalomr@gmail.com</a></h5>
                </div>
                <div className="footer-container">
                    <p className="copy-right">
                            2022 Neosmile Dental. All Rights Reserved
                    </p>
                    <p className="design">
                            Designed by G
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer