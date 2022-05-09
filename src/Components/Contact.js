import React from 'react'
import contact from "../Images/appoint.png"
import Animated from '../Animated'
import { useFormik } from 'formik';
import axios from 'axios';



function Contact() {
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            date: Date,
            mobile:Number,
            description: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }
            if (!values.email) {
                errors.email = "Requried";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.description) {
                errors.description = "Required";
            }
            if(!values.mobile){
                errors.mobile="Required"
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://neosmile-crud.herokuapp.com/bookAppointment', values);
                alert("Successfully sent & i will contact you soon")
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    });

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
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div class="row">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-4">
                                    <span style={{ color: "red" }}>{formik.errors.name}</span>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        placeholder="Name" />
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-4">
                                    <span style={{ color: "red" }}>{formik.errors.email}</span>
                                    <input
                                        type="email"
                                        class="form-control"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        placeholder="Email" />
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-4">
                                    <input
                                        type="date"
                                        class="form-control"
                                        name="date"
                                        onChange={formik.handleChange}
                                        value={formik.values.date}
                                        placeholder="Date" />
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-4">
                                    <span style={{ color: "red" }}>{formik.errors.mobile}</span>
                                    <input
                                        type="number"
                                        class="form-control"
                                        name="mobile"
                                        onChange={formik.handleChange}
                                        value={formik.values.mobile}
                                        placeholder="Mobile" />
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-4">
                                    <span style={{ color: "red" }}>{formik.errors.description}</span>
                                    <textarea
                                        type="text"
                                        row="10"
                                        class="form-control"
                                        name="description"
                                        onChange={formik.handleChange}
                                        value={formik.values.description}
                                        placeholder="Description" />
                                </div>
                                <div className="col-lg-12 m-4">
                                    <input disabled={Object.keys(formik.errors).length !== 0} type={'submit'} className="btn btn-primary" />
                                </div>
                            </div>
                        </div>
                    </form>
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