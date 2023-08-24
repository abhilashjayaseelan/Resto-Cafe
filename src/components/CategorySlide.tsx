import React, { useEffect, Dispatch, SetStateAction} from "react";
import { useDispatch } from "react-redux";
import { setDishes } from "../redux/slices/restaurantDetailsSlice";
import { findDishes } from "../helpers/categoryBasedDishes";
import { MenuCategory } from "../helpers/interfaces";

interface CategorySlideProps {
  cat: string;
  details: Array<MenuCategory>;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const CategorySlide: React.FC<CategorySlideProps> = ({cat, details, selected, setSelected}) => {
  const dispatch = useDispatch();

  async function handleDishes() {
    const result: MenuCategory | null = findDishes(details, cat);
    if (result) {
      setSelected(result?.menu_category);
      dispatch(setDishes(result?.category_dishes));
    }
  }

  useEffect(() => {
    const result: MenuCategory | null = findDishes(details, selected);
    setSelected(details[0].menu_category);
    if (result) {
      dispatch(setDishes(result?.category_dishes));
    }
  }, [details]);

  return (
    <div
      className={`flex shrink-0 justify-center items-center font-semibold w-1/2 md:w-1/4 cursor-pointer ${
        selected === cat
          ? "text-red-500 border-red-500 border-b-4"
          : "text-gray-500 border-gray-500 border-b-4"
      }`}
      onClick={() => handleDishes()}
    >
      <p>{cat}</p>
    </div>
  );
};

export default CategorySlide;
