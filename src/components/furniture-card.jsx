import React from 'react'

export default function FurnitureCard({ productData }) {
    // console.log(productData);
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={productData.images[0]} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{productData.name}</h5>
                    <p className="card-text">{productData.description}</p>
                    <a href="#" className="btn btn-primary">See More</a>
                </div>
            </div>
        </>
    )
}
