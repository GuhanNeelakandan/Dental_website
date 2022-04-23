import React from 'react'
import Animated from '../Animated'
import service from "../Images/service.png"
import SeriveCard from './SeriveCard'
import preventive from "../Images/preventive.png"
import restorative from "../Images/restorative.png"
import pain from "../Images/pain.png"
import surgical from "../Images/scissors.png"
import staright from "../Images/staright.png"
import xray from "../Images/xray.png"
import white from "../Images/white.png"
import clearance from "../Images/clearance.png"

function Service() {
    let details=
    [
        {
            image:preventive,
            heading:"Preventive",
            features:[
                {
                    name:"Regular Scaling and Polishing"
                },
                {
                    name:"Dedicated Scaling and Polishing (for patients with braces)"
                },
                {
                    name:"Root planing(for severe gum disease)"
                },
                {
                    name:"Heavy Stains Removal(especially for wine/coffee/tea/nicotine stains)"
                },
                {
                    name:"Denture cleaning"
                }
            ]
        },
        {
            image:restorative,
            heading:"Restorative",
            features:[
                {
                    name:"Tooth Coloured Fillings"
                },
                {
                    name:"Veneers, Crowns and Bridging( metal, porcelain and combinations)"
                },
                {
                    name:"Dentures(acrylic, cobalt-chrome and Valplast)"
                },
                {
                    name:"Implants"
                }
            ]
        },
        {
            image:pain,
            heading:"Pain Management",
            features:[
                {
                    name:"Cracked Teeth management"
                },
                {
                    name:"Sensitivity management"
                },
                {
                    name:"Root Canal Treatment(1 stage or 2 stages)"
                },
                {
                    name:"Teeth surgery and/or extraction"
                },
                {
                    name:"aw ache management"
                },
                {
                    name:"Night Guard and Splints"
                }
            ]
        },
        {
            image:surgical,
            heading:"Surgical",
            features:[
                {
                    name:"Wisdom teeth surgery and/or extraction"
                },
                {
                    name:"Impacted teeth surgery and/or extraction"
                },
                {
                    name:"Pre-prosthetic Surgery"
                },
                {
                    name:"Incision and Drainage"
                },
            ]
        },
        {
            image:staright,
            heading:"Teeth Straightening",
            features:[
                {
                    name:"Metal Braces"
                },
                {
                    name:"Retainers"
                }
            ]
        },
        {
            image:xray,
            heading:"Digital Radiology",
            features:[
                {
                    name:"Intra-oral xrays"
                },
                {
                    name:"Lateral Cephalometrics xrays"
                },
                {
                    name:"OPGs"
                }
            ]
        },
        {
            image:white,
            heading:"Teeth Whitening",
            features:[
                {
                    name:"Customised Bleaching Kit"
                },
            ]
        },
        {
            image:clearance,
            heading:"Dental Clearance",
            features:[
                {
                    name:"Pre-surgery Dental Clearance"
                },
                {
                    name:"Dental clearance for work or emigration"
                }
            ]
        },
    ]
    return (
        <Animated>
            <div className="container-fluid">
                <div className="row about-row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 service">
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <Animated><div className="head-service"><img classname="service-image" src={service} /><h1 className="service-heading">Service</h1></div></Animated>
                    </div>
                </div>
                <div className="row service-row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 service-para">
                        <div><h3 className="service-subhead">Full Range Of Service--</h3></div>
                        <div>
                            <p >As a 1 stop provider of a wide range of dental services, you can be assured that you will not be referred from 1 doctor to another with no end in mind.</p>
                            <p >Below are some of the services we provide:</p>
                        </div>
                    </div>
                    <Animated>
                    <div className="row service-main">
                        {
                            details.map((detail)=>{
                                return <SeriveCard detailsData={detail}/>
                            })
                        }
                        {/* <div className="text-center col-sm-12 col-md-12 col-lg-4 col-xl-4 xol-xxl-4 service-provide">
                            <img className="ser-img" src={restorative}/>
                            <h3 className="service-pro-head">Restorative</h3>
                            <ul className="list">
                                <li>Tooth Coloured Fillings</li>
                                <li>Veneers, Crowns and Bridging
                                    ( metal, porcelain and combinations)</li>
                                <li>Dentures (acrylic, cobalt-chrome and Valplast)</li>
                                <li>Implants</li>
                            </ul>
                        </div>
                        <div className="text-center col-sm-12 col-md-12 col-lg-4 col-xl-4 xol-xxl-4 service-provide">
                            <img className="ser-img" src={pain}/>
                            <h3 className="service-pro-head">Pain Management</h3>
                            <ul className="list">
                                <li>Cracked Teeth management</li>
                                <li>Sensitivity management</li>
                                <li>Root Canal Treatment
                                    (1 stage or 2 stages)</li>
                                <li>Teeth surgery and/or extraction</li>
                                <li>Jaw ache management</li>
                                <li>
                                    Night Guard and Splints
                                </li>
                            </ul>
                        </div>
                        <div className="text-center col-sm-12 col-md-12 col-lg-4 col-xl-4 xol-xxl-4 service-provide">
                            <img className="ser-img" src={surgical}/> 
                            <h3 className="service-pro-head">Surgical</h3>
                            <ul className="list">
                                <li>Wisdom teeth surgery and/or extraction</li>
                                <li>Impacted teeth surgery and/or extraction</li>
                                <li>Pre-prosthetic Surgery</li>
                                <li>Incision and Drainage</li>
                            </ul>
                        </div>
                        <div className="text-center col-sm-12 col-md-12 col-lg-4 col-xl-4 xol-xxl-4 service-provide">
                            <img className="ser-img" src={staright}/>
                            <h3 className="service-pro-head">Teeth Straightening</h3>
                            <ul className="list">
                                <li>Metal Braces</li>
                                <li>Retainers</li>
                            </ul>
                        </div>
                        <div className="text-center col-sm-12 col-md-12 col-lg-4 col-xl-4 xol-xxl-4 service-provide">
                            <img className="ser-img" src={xray}/>
                            <h3 className="service-pro-head">Digital Radiology</h3>
                            <ul className="list">
                                <li>Intra-oral xrays</li>
                                <li>Lateral Cephalometrics xrays</li>
                                <li>OPGs</li>
                                <li>Teeth surgery and/or extraction</li>
                                <li>Jaw ache management</li>
                                <li>
                                    Night Guard and Splints
                                </li>
                            </ul>
                        </div>
                        <div className="text-center col-sm-12 col-md-12 col-lg-4 col-xl-4 xol-xxl-4 service-provide">
                            <img className="ser-img" src={xray}/>
                            <h3 className="service-pro-head">Teeth Whitening</h3>
                            <ul className="list">
                                <li>Intra-oral xrays</li>
                                <li>Lateral Cephalometrics xrays</li>
                                <li>OPGs</li>
                                <li>Teeth surgery and/or extraction</li>
                                <li>Jaw ache management</li>
                                <li>
                                    Night Guard and Splints
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    </Animated>
                </div>
            </div>
        </Animated>
    )
}

export default Service