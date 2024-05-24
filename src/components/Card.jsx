function Card() {
  return (
      <div className="bg-white max-w-80 rounded-2xl overflow-hidden drop-shadow-xl hover:shadow-xl transition duration-300 m-4">
        <img
          className="rounded-xl"
          src="https://images.unsplash.com/photo-1547517023-7ca0c162f816"
          alt=""
        />
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="mt-2 text-xl font-medium">Aloe Cactus</h1>
            <p className="mt-2">Rs 355 </p>
          </div>
          <div>
            <button className="text-white text-md font-semibold bg-gray-900 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
  )
}

export default Card