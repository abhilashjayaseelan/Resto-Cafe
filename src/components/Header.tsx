import { ImCart } from "react-icons/im";
import {useSelector} from "react-redux";
import { RootState } from "../redux/Reducer";

function Header() {
  const details = useSelector((state: RootState) => state.categoriesAndDishes.categoriesAndDishes);
  const cartCount = useSelector((state: RootState) => state.categoriesAndDishes.cartCount);

  return (
    <div className="fixed bg-white h-12 w-full flex justify-between p-2 text-gray-600 md:pl-20 md:pr-20 z-10">
      <div className="text-2xl font-semibold cursor-pointer"> 
        <p>{details?.restaurant_name}</p>
      </div>
      <div className="flex items-center gap-2 pr-2 relative cursor-pointer">
        <p>My Orders</p>
        <div className="text-2xl">
          <ImCart />
        </div>
        <div className="w-4 h-4 rounded-full bg-red-500 text-xs text-white absolute top-0 right-0 text-center">{cartCount}</div>
      </div>
    </div>
  );
}

export default Header;
