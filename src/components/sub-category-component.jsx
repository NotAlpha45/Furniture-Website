import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_SELECTED_SUB_CATEGORY } from '../action-constants/category-action-constant';

export default function SubCategoryComponent() {

    const subCategoryData = useSelector(data => data.subCategoryReducer);
    const selectedMainCategory = useSelector(data => data.mainCategoryReducer.selectedCategory);
    const subCategoryDispatcher = useDispatch();


    function filterSubcategory(mainCategory) {
        return subCategoryData.allCategories.filter((category) => {
            if (category.mainCategoryName === mainCategory) {
                return category
            }
        })
    }

    const filteredSubCategories = filterSubcategory(selectedMainCategory);


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

                {filteredSubCategories.map((category) => {
                    return (
                        <button href="#" className={`list-group-item list-group-item-action`} key={category.name} onClick={() => changeSelectedCategory(category.name)}>
                            {category.name}
                        </button>
                    )
                })}

            </div>
        </>
    )
}
