import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function RestaurantSlider() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const filteredRestaurants = data.filter((restaurant) => restaurant.rating === 5);
        setRestaurants(filteredRestaurants);
      });
  }, []);

  return (
    <div className="bg-[#1677BD] p-8 mt-8 rounded-lg">
      <h2 className="text-white text-3xl font-normal mb-6">Find the best restaurant ratings below</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="px-4"
      >
        {restaurants.map((restaurant) => (
          <SwiperSlide key={restaurant.id}>
            <div className="bg-white rounded-lg shadow-lg">
              <img src={restaurant.image} alt={restaurant.title} className="rounded-lg w-full h-48 object-cover" />
              <div className='p-4'>
              <h3 className="text-lg font-semibold mt-3">{restaurant.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{restaurant.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="ml-2 text-gray-700 text-sm">{restaurant.rating} ({restaurant.reviews} reviews)</span>
              </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RestaurantSlider;
