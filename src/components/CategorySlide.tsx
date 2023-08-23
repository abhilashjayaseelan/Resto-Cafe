import React from "react";

interface CategorySlideProps {
  cat: string;
}

const CategorySlide: React.FC<CategorySlideProps> = ({ cat }) => {
  return (
    <div className=" flex shrink-0 justify-center items-center font-semibold w-1/2 md:w-1/4 cursor-pointer text-gray-600 border-gray-500 border-b-2">
      <p>{cat}</p>
    </div>
  );
};

export default CategorySlide;
