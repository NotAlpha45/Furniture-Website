import React from 'react'
import SubCategoryComponent from '../components/sub-category-component'
import MainCategoryComponent from '../components/main-category-component'
import FurnitureContainer from '../components/furniture-container'
import "./home.css"

export default function Home() {


    return (
        <>

            <div>
                <h1>Welcome</h1>
            </div>

            <div>
                <MainCategoryComponent />
                <SubCategoryComponent />
                <FurnitureContainer />
            </div>
        </>
    )
}
