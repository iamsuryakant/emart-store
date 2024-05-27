import { useState, useEffect } from 'react';

function FilterContainer({ products, setFilteredProducts, setIsFiltered }) {
  const [filters, setFilters] = useState({
    Color: [],
    Gender: [],
    Price: [],
    Type: [],
  });

  const handleInputChange = (type, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter(item => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  useEffect(() => {
    const filterProducts = () => {
      let filteredProduct = products;

      if (filters.Color.length > 0) {
        filteredProduct = filteredProduct.filter(product =>
          filters.Color.includes(product.color)
        );
      }

      if (filters.Gender.length > 0) {
        filteredProduct = filteredProduct.filter(product =>
          filters.Gender.includes(product.gender)
        );
      }

      if (filters.Price.length > 0) {
        filteredProduct = filteredProduct.filter(product => {
          return filters.Price.some(priceRange => {
            const [min, max] = priceRange.split('-');
            if (max) {
              return (
                product.price >= parseInt(min) && product.price <= parseInt(max)
              );
            } else {
              return product.price >= parseInt(min);
            }
          });
        });
      }

      if (filters.Type.length > 0) {
        filteredProduct = filteredProduct.filter(product =>
          filters.Type.includes(product.type)
        );
      }

      setFilteredProducts(filteredProduct);
      setIsFiltered(
        filters.Color.length > 0 ||
          filters.Gender.length > 0 ||
          filters.Price.length > 0 ||
          filters.Type.length > 0
      );
    };

    filterProducts();
  }, [filters, products, setFilteredProducts, setIsFiltered]);

  return (
    <div className='mt-9 ml-9 w-[300px] bg-gray-50 lg:block hidden rounded-lg drop-shadow-md fixed h-[70%]'>
      <div className='flex ml-4 flex-col p-4'>
        <div>
          <h3 className='relative font-semibold mb-2'>
            Color
            <span className='absolute left-0 right-2/5 mx-auto w-[calc(100%-230px)] bottom-[-2px] h-px bg-gray-900'></span>
          </h3>
          {['Red', 'Blue', 'Green'].map(color => (
            <label key={color} className='flex items-center mb-2 font-medium'>
              <input
                type='checkbox'
                className='mr-2 cursor-pointer w-4 h-4'
                value={color}
                onChange={() => handleInputChange('Color', color)}
              />
              {color}
            </label>
          ))}
        </div>
        <div>
          <h3 className='relative font-semibold mb-2'>
            Gender
            <span className='absolute left-0 right-2/5 mx-auto w-[calc(100%-230px)] bottom-[-2px] h-px bg-gray-900'></span>
          </h3>
          {['Men', 'Women'].map(gender => (
            <label key={gender} className='flex items-center mb-2 font-medium'>
              <input
                type='checkbox'
                className='mr-2 cursor-pointer w-4 h-4'
                value={gender}
                onChange={() => handleInputChange('Gender', gender)}
              />
              {gender}
            </label>
          ))}
        </div>
        <div>
          <h3 className='relative font-semibold mb-2'>
            Price
            <span className='absolute left-0 right-2/5 mx-auto w-[calc(100%-230px)] bottom-[-2px] h-px bg-gray-900'></span>
          </h3>
          {['0-250', '250-450', '450+'].map(priceRange => (
            <label
              key={priceRange}
              className='flex items-center mb-2 font-medium'
            >
              <input
                type='checkbox'
                className='mr-2 cursor-pointer w-4 h-4'
                value={priceRange}
                onChange={() => handleInputChange('Price', priceRange)}
              />
              Rs {priceRange.replace('-', ' - Rs ')}
            </label>
          ))}
        </div>
        <div>
          <h3 className='relative font-semibold mb-2'>
            Type
            <span className='absolute left-0 right-2/5 mx-auto w-[calc(100%-230px)] bottom-[-2px] h-px bg-gray-900'></span>
          </h3>
          {['Polo', 'Hoodie', 'Basic'].map(type => (
            <label key={type} className='flex items-center mb-2 font-medium'>
              <input
                type='checkbox'
                className='mr-2 cursor-pointer w-4 h-4'
                value={type}
                onChange={() => handleInputChange('Type', type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilterContainer;
