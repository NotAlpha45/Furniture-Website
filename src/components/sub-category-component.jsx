import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_SELECTED_SUB_CATEGORY } from '../action-constants/category-action-constant';

export default function SubCategoryComponent() {

    const subCategoryData = useSelector(data => data.subCategoryReducer);
    const subCategoryDispatcher = useDispatch();

    function changeSelectedCategory(categoryName) {
        subCategoryDispatcher(
            {
                type: UPDATE_SELECTED_SUB_CATEGORY,
                payload: categoryName
            }
        );
    }

    function isCurrentCategoryIsActive(categoryName) {
        if (categoryName === subCategoryData.selectedCategory) {
            return "active"
        }
        return ""
    }

    return (
        <>
            <div className="list-group">

                {subCategoryData.allCategories.map((category) => {
                    return (
                        <button href="#" className={`list-group-item list-group-item-action ${isCurrentCategoryIsActive(category.name)}`} key={category.name} onClick={() => changeSelectedCategory(category.name)}>
                            {category.name}
                        </button>
                    )
                })}

            </div>
        </>
    )
}
