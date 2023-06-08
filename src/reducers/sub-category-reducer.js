import { UPDATE_SELECTED_SUB_CATEGORY } from "../action-constants/category-action-constant";
import { initialSubCategoryData } from "../mock-data/mock-category-data";

function subCategoryReducer(subCategoryData = initialSubCategoryData, action) {
  // Write any API get request here

  switch (action.type) {
    case UPDATE_SELECTED_SUB_CATEGORY:
      return { ...subCategoryData, selectedCategory: action.payload };

    default:
      return subCategoryData;
  }
}

export default subCategoryReducer;
