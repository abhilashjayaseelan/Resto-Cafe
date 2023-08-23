function CategoryDishes() {
  return (
    <div className="p-2 flex justify-between border-b-2 border-b-gray-400">
      <div className="pl-5 relative">
        <div className="h-4 w-4 border border-solid border-red-600 flex justify-center items-center absolute left-0 top-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
        </div>
        <div className="font-semibold text-lg">
          <p>Spanish Salad</p>
        </div>
        <div className="text-xs font-semibold">
          <p>SAR 7.9</p>
        </div>
        <div className="text-gray-500">
          <p>
            French, spanish, mashroom and something that will taste good it is
            ready to serve
          </p>
        </div>
        <div className="bg-lime-600 h-6 w-28 rounded-full flex justify-between pl-3 pr-3 text-white">
          <p className="cursor-pointer"> - </p>
          <p> 0 </p>
          <p className="cursor-pointer"> + </p>
        </div>
        <div className="text-red-600">
          <p>Customization available</p>
        </div>
      </div>
      <div className="flex items-center text-sm font-semibold">
        <p>15 calories</p>
      </div>
      <div className="flex items-center">
        <img src="src/assets/react.svg" alt="" />
      </div>
    </div>
  );
}

export default CategoryDishes;
