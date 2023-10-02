import React, { Component } from 'react'
export class Newsitem extends Component {

    render() {
        let {title, describtion, imageUrl,newsUrl} = this.props;
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://gray-kttc-prod.cdn.arcpublishing.com/resizer/S3DQqH0E3vsv0gqjOv-kGehgSas=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/BC3VZ3AF2VDETC4EQR65YV4E4U.png":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{!title?"The Attico's First Runway Show at Milan Fash":title}...</h5>
                            <p className="card-text">{describtion}......</p>
                            <a  href={newsUrl} target='blank' className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
