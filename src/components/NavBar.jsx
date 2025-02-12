import { useState } from "react";
import { FaUtensils, FaHotel, FaHome, FaShoppingBag, FaCar, FaSpa, FaTree, FaLandmark, FaShower, FaBeer, FaDumbbell, FaTh } from "react-icons/fa";

const categories = [
  { name: "All", icon: <FaTh /> },
  { name: "Restaurants", icon: <FaUtensils /> },
  { name: "Hotels", icon: <FaHotel /> },
  { name: "Home services", icon: <FaHome /> },
  { name: "Shopping", icon: <FaShoppingBag /> },
  { name: "Car location", icon: <FaCar /> },
  { name: "Beauty & Spa", icon: <FaSpa /> },
  { name: "Park", icon: <FaTree /> },
  { name: "Museum", icon: <FaLandmark /> },
  { name: "Car wash", icon: <FaShower /> },
  { name: "Bars", icon: <FaBeer /> },
  { name: "Gyms", icon: <FaDumbbell /> },
];

function NavBar() {
  const [active, setActive] = useState("Restaurants");

  return (
    <div className="bg-white shadow-md w-full p-6">
      <div className="flex justify-between w-full">
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide w-full justify-between">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => setActive(category.name)}
              className={`flex flex-col items-center cursor-pointer transition duration-300 ${
                active === category.name ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div className="text-2xl">{category.icon}</div>
              <span className="text-sm mt-1">{category.name}</span>
              {active === category.name && (
                <div className="w-6 h-1 bg-blue-600 mt-1 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
