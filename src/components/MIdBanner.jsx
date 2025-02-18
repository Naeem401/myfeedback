import banner from "../assets/img/Side.png"

function MIdBanner() {
  return (
    <div className=" py-4 px-12 bg-[#F2F2F2] flex flex-col lg:flex-row justify-center items-center gap-8">
<div className="flex-1 flex flex-col justify-center items-center">
    <div className=" ml-auto max-w-[475px]">
    <h2 className="font-extrabold text-[26px] text-[#1E1E1E]">
    MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business
    </h2>
    <p className="font-normal text-base text-[#5E5E5E] mt-2">The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
    </div>
    <button className="font-normal text-[17px] text-[#FFFFFF] bg-[#1E1E1E] py-2 px-4 rounded-full justify-start items-start mt-4">Explore MyFeedback business</button>
   
</div>
<div className="flex-1">
    <img src={banner} alt="" />
</div>
    </div>
  )
}

export default MIdBanner