import React from 'react'
import SubCategoryComponent from '../components/sub-category-component'
import MainCategoryComponent from '../components/main-category-component'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRODUCT_BY_CATEGORY } from '../action-constants/product-action-constant'

export default function Home() {

    const selectedMainCategory = useSelector(data => data.mainCategoryReducer.selectedCategory);
    const productDispatcher = useDispatch();
    const filteredProducts = productDispatcher(
        {
            type: GET_PRODUCT_BY_CATEGORY,
            payload: selectedMainCategory
        }
    )
    console.log(filteredProducts);

    return (
        <>
            <div>
                <h1>Welcome</h1>
            </div>

            <div>
                <MainCategoryComponent />
                <SubCategoryComponent />
            </div>
        </>
    )
}
