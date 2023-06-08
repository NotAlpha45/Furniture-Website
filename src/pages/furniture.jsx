import React, { useEffect } from 'react'
import "./furniture.css"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_BY_ID } from '../action-constants/product-action-constant'

export default function Furniture() {
    const productId = useParams().id

    const productDispatcher = useDispatch();
    console.log(typeof productId);

    useEffect(() => {
        productDispatcher({
            type: GET_PRODUCT_BY_ID,
            payload: productId
        })
    }, [])

    // The action of get product by ID returns an array of the matched furniture data
    const product = useSelector(data => data.productReducer[0])


    return (
        <>
            <div className='desktop2'>
                <div className='frame16'>

                    <div className='frame26'>

                        <div className='frame14'>
                            <p className='buy-button-text'>Buy Now</p>
                        </div>

                        <div className='frame13'>
                            <p className='cart-button-text'>Add to Cart</p>
                        </div>

                        {product.images.map((image) => {
                            return (
                                <div className='optional-image-container' key={`optional-${image}`}>
                                    <img className="optional-image" src={image} />
                                </div>

                            )
                        })}


                    </div>

                    <div className='frame17'>
                        <p className='price-warning'>
                            Price may change due to color and fabric change
                        </p>
                        <div className='frame31'>
                            <div className='frame18'>
                                <div className='frame34'>
                                    <a className='quantity-increment'>+</a>
                                </div>
                                <div className='frame33'>
                                    <a className='quantity-decrement'>-</a>
                                </div>
                                <div className='quantity'>1</div>
                            </div>
                            <div className='quantity-text'>Quantity</div>
                            <div className='price-amount'>6969 BDT</div>

                            <div className='frame19'>
                                <select className='expand-down' value="val1">
                                    <option className='selection' selected="selected" value="val1">Non Lacqure Finish</option>
                                    <option className='selection' value="val2">Lacqure Finish</option>
                                </select>
                                <p className='default-selection'>Non Lacqure Finish</p>
                            </div>
                            <div className='material-selection-label'>Material and Wood Finish</div>

                            <div className='frame15'>
                                <select className='expand-down2' value="val1">
                                    <option className='selection2' selected="selected" value="val1">Body : Artificial Leather</option>
                                    <option className='selection2' value="val2">Body : Genuine Leather</option>
                                </select>
                                <p className='default-selection2'>Body : Artificial Leather</p>
                            </div>
                            <div className='material-selection-label2'>Parts of color and fabric</div>

                            <div className='furniture-description'>
                                {product.description}
                            </div>
                            <div className='furniture-description-label'>
                                About Product
                            </div>

                            <div className='furniture-title'>
                                {product.name}
                            </div>


                        </div>

                        <img className='main-furniture-image' src={`${product.images[0]}`} />

                    </div>

                </div>


            </div>

            {/* <div className="container">
                <div className="col-lg-8 border p-3 main-section bg-white">
                    <div className="row hedding m-0 pl-3 pt-0 pb-3">
                        Your Furniture
                    </div>
                    <div className="row m-0">
                        <div className="col-lg-4 left-side-product-box pb-3">
                            <img
                                src={product.images[0]}
                                className="border p-3"
                            />
                            <span className="sub-img">
                                {product.images.map((imageLink) => {
                                    return (
                                        <img
                                            src={imageLink}
                                            className="border p-2"
                                            key={imageLink}
                                        />
                                    )
                                })}


                            </span>
                        </div>
                        <div className="col-lg-8">
                            <div className="right-side-pro-detail border p-3 m-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <span>Who What Wear</span>
                                        <p className="m-0 p-0">{product.name}</p>
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="m-0 p-0 price-pro">৳{product.price}</p>
                                        <hr className="p-0 m-0" />
                                    </div>
                                    <div className="col-lg-12 pt-2">
                                        <h5>Product Detail</h5>
                                        <span>
                                            {product.description}
                                        </span>
                                        <hr className="m-0 pt-2 mt-2" />
                                    </div>
                                    <div className="col-lg-12">
                                        <p className="tag-section">
                                            <strong>Tag : </strong>
                                            <a href="">{product.category}</a>
                                        </p>
                                    </div>
                                    <div className="col-lg-12">
                                        <h6>Quantity :</h6>
                                        <input
                                            type="number"
                                            className="form-control text-center w-100"
                                            defaultValue={1}
                                        />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <div className="row">
                                            <div className="col-lg-6 pb-2">
                                                <a href="#" className="btn btn-danger w-100">
                                                    Add To Cart
                                                </a>
                                            </div>
                                            <div className="col-lg-6">
                                                <a href="#" className="btn btn-success w-100">
                                                    Shop Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

        </>
    )
}
