

function Card({restaurant}) {
  return (
    <div className="bg-[#F8F8F8] rounded-lg">
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
  )
}

export default Card