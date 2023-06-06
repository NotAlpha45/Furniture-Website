import { combineReducers } from "redux";
import mainCategoryReducer from "./main-category-reducer";
import subCategoryReducer from "./sub-category-reducer";
import productReducer from "./furniture-reducer";
import { createStore } from "redux";

const combinedReducer = combineReducers({
  mainCategoryReducer,
  subCategoryReducer,
  productReducer,
});

const combinedStore = createStore(combinedReducer);

export default combinedStore;
