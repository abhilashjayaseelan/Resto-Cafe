import { ImCart } from "react-icons/im";

function Header() {
  return (
    <div className="h-12 w-full flex justify-between p-2 text-gray-600">
      <div className="text-2xl pl-3"> 
        <p>Restaurant name</p>
      </div>
      <div className="flex items-center gap-2 pr-2 relative">
        <p>My Orders</p>
        <div className="text-2xl">
          <ImCart />
        </div>
        <div className="w-4 h-4 rounded-full bg-red-500 text-xs text-white absolute top-0 right-0 text-center">0</div>
      </div>
    </div>
  );
}

export default Header;
