import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_SELECTED_MAIN_CATEGORY } from '../action-constants/category-action-constant';

export default function MainCategoryComponent() {

    const mainCategoryData = useSelector(data => data.mainCategoryReducer);
    const mainCategoryDispatcher = useDispatch();

    function changeSelectedCategory(categoryName) {
        mainCategoryDispatcher(
            {
                type: UPDATE_SELECTED_MAIN_CATEGORY,
                payload: categoryName
            }
        );
    }

    function isCurrentCategoryIsActive(categoryName) {
        if (categoryName === mainCategoryData.selectedCategory) {
            return "active"
        }
        return ""
    }

    return (
        <>
            <ul className="nav nav-tabs">
                {
                    mainCategoryData.allCategories.map((category) => {
                        return (
                            <li className="nav-item" key={`nav-item-${category.name}`}>
                                <button className={`nav-link ${isCurrentCategoryIsActive(category.name)}`} onClick={() => { changeSelectedCategory(category.name) }} >
                                    {category.name}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
