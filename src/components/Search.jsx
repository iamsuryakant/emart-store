import { FaFilter } from "react-icons/fa"

function Search() {
  return (
      <div className="mt-28 px-6">
          <div className="container lg:ml-52 md:mx-auto sm:mx-auto flex justify-center">
              <div className="relative w-full max-w-md">
                  <input className="w-[90%] py-2 border-b-2 border-gray-400 focus:outline-none focus:border-gray-400" type="search" placeholder="Search for Products..." />
              </div>
              <button className="lg:hidden text-white bg-gray-800 p-3 rounded-lg">
                <FaFilter className="h-5 w-5"/>
              </button>
          </div>
    </div>
    
  )
}

export default Search