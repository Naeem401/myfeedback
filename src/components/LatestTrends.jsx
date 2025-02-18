import { useEffect, useState } from "react";
import Card from "./Card";


function LatestTrends() {
    const [restaurants, setRestaurants] = useState([]);
     useEffect(() => {
        fetch('/data.json')
          .then((response) => response.json())
          .then((data) => {
            setRestaurants(data);
          });
      }, []);
  return (
    <div className="w-[95%] mx-auto">
    <h2 className="text-3xl font-extrabold mt-8">The latest trends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
{
   restaurants.map((restaurant) => (
   
     <Card key={restaurant.id} restaurant={restaurant} />

  ))
  
}
    </div>
    </div>
  )
}

export default LatestTrends