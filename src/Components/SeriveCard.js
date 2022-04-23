import React from 'react'




function SeriveCard(props) {
    return (
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 xol-xxl-4 service-provide">
            <img className="ser-img" src={props.detailsData.image} />
           {console.log(props.detailsData.img)}
            <h3 className="service-pro-head">{props.detailsData.heading}</h3>
            <ul className="list">
                    {
                        props.detailsData.features.map((list)=>{
                            return (
                                <li>{list.name}</li>
                            )
                        })
                    }
            </ul>
        </div>
    )
}

export default SeriveCard