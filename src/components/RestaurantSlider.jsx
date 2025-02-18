import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from './Card';

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
    <div className="bg-[#1677BD] p-8 mt-8 rounded-lg w-[95%] mx-auto">
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
           <Card restaurant={restaurant} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RestaurantSlider;
