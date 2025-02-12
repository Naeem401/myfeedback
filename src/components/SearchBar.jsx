import { TbWorld } from "react-icons/tb";
import logo from "../assets/img/logo.png";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="bg-white p-2 lg:p-4 shadow-md w-full">
      {/* Mobile View: Logo & Right Buttons Move Left, Search Box Moves Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side (Logo + Right Side Button) */}
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <img className="max-w-[120px] md:max-w-[166px]" src={logo} alt="Logo" />
          <div className="flex items-center space-x-4 md:hidden"> {/* Only on mobile */}
            <TbWorld className="text-xl" />
            <button className="bg-black text-white px-3 py-2 rounded-full font-normal text-sm">
              MyFeedback for business
            </button>
          </div>
        </div>

        {/* Search Box (Only Moves to Bottom on Mobile) */}
        <div className="w-full flex justify-center mt-3 md:mt-0 md:w-auto">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full max-w-[500px]">
            <input
              type="text"
              placeholder="restaurant, hotel, service...."
              className="w-full outline-none bg-transparent text-gray-600 placeholder-gray-400 px-2"
            />
            <span className="text-gray-400 hidden md:inline">|</span>
            <input
              type="text"
              placeholder="Singapore..."
              className="outline-none bg-transparent text-gray-600 placeholder-gray-400 px-2 w-[150px] hidden md:inline"
            />
            <button className="bg-blue-600 p-2 rounded-full text-white ml-2">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Right Side Button (Hidden on Mobile, Shown on Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <TbWorld className="text-2xl" />
          <button className="bg-black text-white px-4 py-2 rounded-full font-medium text-sm">
            MyFeedback for business
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
