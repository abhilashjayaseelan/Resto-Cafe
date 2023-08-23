import { combineReducers } from "redux";
import categoriesAndDishesReducer from "../redux/slices/restaurantDetailsSlice";

const rootReducer = combineReducers({
  categoriesAndDishes: categoriesAndDishesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;