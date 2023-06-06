import { UPDATE_SELECTED_MAIN_CATEGORY } from "../action-constants/category-action-constant";

const initialMainCategoryData = {
  selectedCategory: "Sofas",
  allCategories: [
    {
      name: "Sofas",
      description: "Comfortable seating options for your living room.",
    },
    {
      name: "Tables",
      description: "Stylish and functional tables for various purposes.",
    },
    {
      name: "Chairs",
      description: "Different types of chairs for dining or relaxing.",
    },
    {
      name: "Beds",
      description: "Cozy beds for a good night's sleep.",
    },
    {
      name: "Cabinets",
      description: "Storage solutions to keep your belongings organized.",
    },
  ],
};

function mainCategoryReducer(
  mainCategoryData = initialMainCategoryData,
  action
) {
  // Write any API get request here

  switch (action.type) {
    case UPDATE_SELECTED_MAIN_CATEGORY:
      return { ...mainCategoryData, selectedCategory: action.payload };

    default:
      return mainCategoryData;
  }
}

export default mainCategoryReducer;
