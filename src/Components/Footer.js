import React from 'react'
import smile from "../Images/smile.png"

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
                    <h5 className="locate-add">No.30 annai indira gandhi street, shollinganallur chennai-600097</h5>
                </div>
                <div className="text-center mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <h4 className="touch">Get in touch</h4>
                    <h5 className="whatsapp">Via whatsapp</h5>
                    <a className="btn btn-sm-2 btn-warning m-2 butt" href="https://api.whatsapp.com/send?phone=7708282837 text=Hello this is the starting message">7708282837</a>
                    <h5 className="call">or call 7200943938<br/>neosmiledentalomr@gmail.com</h5>
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