import { UPDATE_SELECTED_SUB_CATEGORY } from "../action-constants/category-action-constant";

const initialSubCategoryData = {
  selectedCategory: "Coffee Tables",
  allCategories: [
    {
      name: "Leather Sofas",
      description: "Elegant leather sofas for luxurious comfort.",
      noOfItems: 10,
      mainCategoryName: "Sofas",
    },
    {
      name: "Coffee Tables",
      description: "Stylish coffee tables for your living room.",
      noOfItems: 15,
      mainCategoryName: "Tables",
    },
    {
      name: "Dining Chairs",
      description: "Comfortable chairs for your dining area.",
      noOfItems: 8,
      mainCategoryName: "Chairs",
    },
    {
      name: "King Beds",
      description: "Spacious king-sized beds for a restful sleep.",
      noOfItems: 5,
      mainCategoryName: "Beds",
    },
    {
      name: "Bookcases",
      description: "Functional bookcases for organizing your books.",
      noOfItems: 12,
      mainCategoryName: "Cabinets",
    },
  ],
};

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
