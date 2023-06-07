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
            <div className="container">
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
            </div>

        </>
    )
}
