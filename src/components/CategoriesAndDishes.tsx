// import { useState } from "react";
import CategorySlide from "./CategorySlide";
import CategoryDishes from "./CategoryDishes";

function CategoriesAndDishes() {
  return (
    <div className=" pt-12 md:p-2 md:pl-20 md:pr-20 relative">
      <div className="w-full flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 pb-1 md:mt-12">
        <CategorySlide cat="salads and soup" />
        <CategorySlide cat="salads and soup" />
        <CategorySlide cat="salads and soup" />
        <CategorySlide cat="salads and soup" />
        <CategorySlide cat="salads and soup" />
        <CategorySlide cat="salads and soup" />
        <CategorySlide cat="salads and soup" />
      </div>
      <div className="">
        <CategoryDishes />
        <CategoryDishes />
        <CategoryDishes />
        <CategoryDishes />
        <CategoryDishes />
        <CategoryDishes />
        <CategoryDishes />
        <CategoryDishes />
      </div>
    </div>
  );
}

export default CategoriesAndDishes;
