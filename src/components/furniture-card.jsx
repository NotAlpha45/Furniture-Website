import React from 'react'

export default function FurnitureCard() {
    return (
        <>
            <div className="card" style={{width:"18rem"}}>
                <img className="card-img-top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffurniture%2F&psig=AOvVaw3L0G_Hwsf43L_PYnInDCDL&ust=1686131587081000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNi34uOvrv8CFQAAAAAdAAAAABAE" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}
