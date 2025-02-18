import LatestTrends from "../components/LatestTrends"
import MIdBanner from "../components/MIdBanner"
import RecentsActivities from "../components/RecentsActivities"
import RestaurantSlider from "../components/RestaurantSlider"


function Restaurants() {
  return (
    <div>
        <RestaurantSlider />
        <LatestTrends/>
        <div className="p-8 flex flex-col">
        <h4 className="text-center text-[#1E1E1E] font-normal text-[22px]">Discover more cool restaurants</h4>
        <button className="py-2 px-4 bg-[#1677BD] mx-auto rounded-full font-normal text-xl text-[#FFFFFF] mt-4">Show more</button>
        </div>
        <MIdBanner/>
        <RecentsActivities/>
    </div>
  )
}

export default Restaurants