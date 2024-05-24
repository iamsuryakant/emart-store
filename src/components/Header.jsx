import { BsCart3 } from "react-icons/bs"

function Header() {
    let cartCount = 3;
  return (
    <header className="bg-gray-200 fixed top-0 w-full shadow-md z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-medium font-sans text-gray-600">
            Emart Store
          </a>
          <div className="flex items-center space-x-10">
                      <a href="#" className="relative text-gray-900 font-medium hover:text-red-600">
                          
                          Products
                          <span className="absolute -left-1/4 right-0 mx-auto w-[calc(100%-20px)] bottom-[-4px] h-px bg-gray-900"></span>
            </a>
            <div className="relative">
              <a href="#" className="flex items-center text-gray-900 hover:text-red-600">
                <BsCart3 className="h-7 w-7" aria-label="Cart" />
                {cartCount > 0 && (
                  <span className="text-sm font-medium text-white bg-red-500 rounded-full h-5 w-5 flex items-center justify-center relative -top-4">
                    {cartCount}
                  </span>
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header