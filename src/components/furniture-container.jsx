import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_BY_CATEGORY } from '../action-constants/product-action-constant'
import FurnitureCard from './furniture-card';

export default function FurnitureContainer() {
    const selectedMainCategory = useSelector(data => data.mainCategoryReducer.selectedCategory);
    const productDispatcher = useDispatch();

    React.useEffect(() => {
        productDispatcher({
            type: GET_PRODUCT_BY_CATEGORY,
            payload: selectedMainCategory
        })
    }, [selectedMainCategory])

    const products = useSelector(data => data.productReducer)

    // console.log(selectedMainCategory, products);
    return (
        <>
            {products.map((product) => {
                return (
                    <div key={`product-${product.name}`}>
                        <FurnitureCard productData={product} />
                    </div>
                )
            })}
        </>
    )
}
