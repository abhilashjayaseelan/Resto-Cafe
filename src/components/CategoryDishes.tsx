import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dish } from "../helpers/interfaces";
import { setCount } from "../redux/slices/restaurantDetailsSlice";
import { RootState } from "../redux/Reducer";

interface CategoryDishesProps {
  details: Dish;
}

const CategoryDishes: React.FC<CategoryDishesProps> = ({ details }) => {
  const dispatch = useDispatch();
  const totalCount = useSelector((state: RootState) => state.categoriesAndDishes.cartCount);
  const [cartCount, setCartCount] = useState(0);

  function handleCartCount(count: number) {
    if (cartCount >= 0 && count !== -1 || cartCount > 0) {
      setCartCount(cartCount + count);
      dispatch(setCount(totalCount + count));
    }
  }

  return (
    <div className="p-2 flex justify-between border-b-2 border-b-gray-400">
      <div className="pl-5 relative w-4/5">
        {details?.dish_Type === 2 ? (
          <div className="h-4 w-4 border border-solid border-green-600 flex justify-center items-center absolute left-0 top-1">
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
          </div>
        ) : (
          <div className="h-4 w-4 border border-solid border-red-600 flex justify-center items-center absolute left-0 top-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        )}
        <div className="font-semibold text-base">
          <p>{details?.dish_name}</p>
        </div>
        <div className="text-xs font-semibold">
          <p>SAR {details?.dish_price}</p>
        </div>
        <div className="text-gray-500 ">
          <p>{details?.dish_description}</p>
        </div>
        {details?.dish_Availability ? (
          <div className="bg-green-600 h-6 w-28 rounded-full flex justify-between pl-3 pr-3 mt-1 text-white">
            <p className="cursor-pointer" onClick={() => handleCartCount(-1)}>
              {" "}
              -{" "}
            </p>
            <p> {cartCount} </p>
            <p className="cursor-pointer" onClick={() => handleCartCount(1)}>
              {" "}
              +{" "}
            </p>
          </div>
        ) : (
          <div className="text-red-500 text-sm">
            <p>Not Available</p>
          </div>
        )}
        <div className="text-red-500 text-sm">
          {details?.addonCat.length > 0 ? <p>Customization available</p> : ""}
        </div>
      </div>
      <div className="md:flex md:gap-10">
        <div className="flex items-center text-sm font-semibold">
          <p>{details?.dish_calories} Calories</p>
        </div>
        <img
          src={details?.dish_image}
          alt={details?.dish_image}
          className="h-20 w-20 rounded-lg"
        />
      </div>
    </div>
  );
};

export default CategoryDishes;
