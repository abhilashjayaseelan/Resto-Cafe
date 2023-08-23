import React from "react";
import { useDispatch } from "react-redux";
import { setDishes } from "../redux/slices/restaurantDetailsSlice";
import { findDishes } from "../helpers/categoryBasedDishes";
import { MenuCategory } from "../helpers/interfaces";

interface CategorySlideProps {
  cat: string;
  details: Array <MenuCategory>
}

const CategorySlide: React.FC<CategorySlideProps> = ({ cat, details }) => {
  const dispatch = useDispatch();

  async function handleDishes () {
    const result = findDishes(details, cat);
    dispatch(setDishes(result));
  }

  return (
    <div className="flex shrink-0 justify-center items-center font-semibold w-1/2 md:w-1/4 cursor-pointer text-gray-500 border-gray-500 border-b-2"
      onClick={()=>handleDishes()}
    >
      <p>{cat}</p>
    </div>
  );
};

export default CategorySlide;
