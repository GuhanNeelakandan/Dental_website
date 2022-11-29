import React from "react";
import Animated from "../Animated";
import pricing from "../Images/pricing.png";
import braces from "../Images/braces.png";
import PricingCard from "./PricingCard";
import wisdom from "../Images/wisdom.png";
import implants from "../Images/implants.png";
import rct from "../Images/rct.png";
import whitening from "../Images/whitening.jpg";
function Pricing() {
  let pricingList = [
    {
      image: braces,
      number: "1",
      heading: "Braces",
      features: [
        {
          name: "Flexibility in treatment: clients can choose to abort or transfer during any phase of treatment",
        },
        {
          name: "Flexible payment installments available",
        },
        {
          name: "Package is inclusive of all study models, X-rays and a set of clear retainers upon completion of treatment",
        },
      ],
    },
    {
      image: wisdom,
      number: "2",
      heading: "Wisdom Teeth",
      features: [
        {
          name: "Fully payable by Medisave (For Singaporeans and PRs)",
        },
      ],
    },
    {
      image: implants,
      number: "3",
      heading: "Dental Implants",
      features: [
        {
          name: "Price includes X-rays and medications",
        },
      ],
    },
    {
      image: rct,
      number: "4",
      heading: "Root Canal Treatment",
      features: [
        {
          name: "Able to provide root canal treatment for both front and posterior teeth",
        },
        {
          name: "Single visit treatment available for suitable cases",
        },
      ],
    },
    {
      image: whitening,
      number: "5",
      heading: "Whitening",
      features: [
        {
          name: "Prices include customized bleaching trays and whitening gel",
        },
      ],
    },
  ];
  return (
    <Animated>
      <div className="container-fluid">
        <div className="row about-row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 service"></div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
            <Animated>
              <div className="head-service">
                <img classname="service-image" src={pricing} />
                <h1 className="service-heading">Treatment</h1>
              </div>
            </Animated>
          </div>
        </div>
        <div className="col-row">
          <h2 className="price-head">Neosmile Dental Treatments</h2>
        </div>
        <Animated>
          {pricingList.map((list) => {
            return <PricingCard listData={list} />;
          })}
        </Animated>
      </div>
    </Animated>
  );
}

export default Pricing;
