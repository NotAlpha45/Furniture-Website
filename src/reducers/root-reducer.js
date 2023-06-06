import { combineReducers } from "redux";
import mainCategoryReducer from "./main-category-reducer";
import subCategoryReducer from "./sub-category-reducer";
import { createStore } from "redux";

const combinedReducer = combineReducers({
  mainCategoryReducer,
  subCategoryReducer,
});

const combinedStore = createStore(combinedReducer);

export default combinedStore;
