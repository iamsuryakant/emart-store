import Category from "./Category"

function Sidebar() {
  const catergoryData = [
    { label: ['Red', 'Blue', 'Green'], name: 'Color' },
    { label: ['Men', 'Women'], name: 'Gender' },
    { label: ['0-Rs 250', 'Rs 251-450', 'Rs 450+'], name: 'Price' },
    { label: ['Polo', 'Hoodie', 'Basic'], name: 'Type' }
  ]
  
  return (
       <div className="mt-9 ml-9 w-[300px] bg-gray-50 lg:block hidden rounded-lg drop-shadow-md fixed h-[70%]">
      <div className="flex ml-4 flex-col p-4">
        {
          catergoryData.map((item, index) => {
            return <Category key={index} name={item.name} label={item.label} />
          })
        }
        </div>
    </div>
  )
}

export default Sidebar