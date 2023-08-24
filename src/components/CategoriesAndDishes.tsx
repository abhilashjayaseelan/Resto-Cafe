import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategorySlide from "./CategorySlide";
import CategoryDishes from "./CategoryDishes";
import { RootState } from "../redux/Reducer";
import { Dish } from "../helpers/interfaces";
import { AppDispatch } from "../redux/Store";
import {
  fetchRestaurantDishes,
  clearRestaurantDetails,
} from "../redux/slices/restaurantDetailsSlice";
import Shimmer from "./Shimmer";

function CategoriesAndDishes() {
  const dispatch = useDispatch<AppDispatch>();
  const catAndDish = useSelector((state: RootState) => state.categoriesAndDishes?.categoriesAndDishes);
  const dishes = useSelector((state: RootState) => state.categoriesAndDishes?.dishes);
  const status = useSelector((state: RootState) => state.categoriesAndDishes.status);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchRestaurantDishes());
    };
    fetchData();

    return() => {
      dispatch(clearRestaurantDetails());
    };
  }, [dispatch]);

  if(status === 'loading') {
    return (
      <Shimmer/>
    )
  }

  return (
    <div className="min-h-screen pt-12 md:p-2 md:pl-20 md:pr-20 relative">
      <div className="w-full flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 pb-1 md:mt-12">
        {catAndDish?.table_menu_list?.map((list: { menu_category: string }) => (
          <CategorySlide
            key={list?.menu_category}
            cat={list?.menu_category}
            details={catAndDish?.table_menu_list}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      <div>
        {dishes?.map((dishes: Dish) => (
          <CategoryDishes
            key={dishes?.dish_id}
            details={dishes}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoriesAndDishes;
