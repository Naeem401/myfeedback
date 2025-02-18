
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import recent1 from "../assets/img/Recents1.png";
import recent2 from "../assets/img/Recents2.png";
import recent3 from "../assets/img/Recents3.png";
import recent4 from "../assets/img/Recents4.png";
import recent5 from "../assets/img/Recents5.png";
import recent6 from "../assets/img/Recents6.png";
import recent7 from "../assets/img/Recents7.png";
import recent8 from "../assets/img/Recents8.png";
import recent9 from "../assets/img/Recents9.png";

const RecentsActivities = () => {
  // JSON Data directly inside the component
  const activities = [
    {
      id: 1,
      name: "Leslie Sakho",
      location: "Canada, Toronto",
      date: "09/11/2023",
      rating: 5,
      description:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [recent1, recent2, recent3],
      link: "#",
    },
    {
      id: 2,
      name: "Chris Macari",
      location: "Singapore",
      date: "14/09/2023",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [recent4, recent5, recent6],
      link: "#",
    },
    {
      id: 3,
      name: "Jojo Alba",
      location: "Kuala Lumpur",
      date: "28/09/2023",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [recent7, recent8, recent9],
      link: "#",
    },
    {
      id: 4,
      name: "Leslie Sakho",
      location: "Canada, Toronto",
      date: "09/11/2023",
      rating: 5,
      description:"The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [recent1, recent2, recent3],
      link: "#",
    },
    {
      id: 5,
      name: "Chris Macari",
      location: "Singapore",
      date: "14/09/2023",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [recent4, recent5, recent6],
      link: "#",
    },
    {
      id: 6,
      name: "Jojo Alba",
      location: "Kuala Lumpur",
      date: "28/09/2023",
      rating: 5,
      description:
        "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      images: [recent7, recent8, recent9],
      link: "#",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-extrabold mb-6">Recent Activities</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1 },
        }}
      >
        {activities.map((activity) => (
          <SwiperSlide key={activity.id}>
            <div className="bg-[#F8F8F8] p-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 text-lg">👤</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{activity.name}</h3>
                  <p className="text-gray-500 text-sm">{activity.location}</p>
                </div>
              </div>

              <div className="flex items-center my-3">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500 text-lg" />
                ))}
                <span className="text-gray-500 text-sm ml-2">
                  {activity.date}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{activity.description}</p>

              <div className="flex space-x-2">
                {activity.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`activity-${idx}`}
                    className="w-20 h-16 rounded-lg object-cover"
                  />
                ))}
              </div>

              <a href={activity.link} className="text-[#232323] font-semibold mt-3 block">
                <span className="border-b-2">Discover</span>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-end space-x-4 mt-4">
        <button className="prev p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaArrowLeft />
        </button>
        <button className="next p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default RecentsActivities;
