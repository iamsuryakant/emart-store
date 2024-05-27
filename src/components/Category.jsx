function Input({ labelName }) {
  return (
    <label className='flex items-center mb-2 font-medium'>
      <input type='checkbox' className='mr-2 cursor-pointer w-4 h-4' />
      {labelName}
    </label>
  );
}

function Category({ name, label }) {
  return (
    <div>
      <h3 className=' relative font-semibold mb-2'>
        {name}
        <span className='absolute left-0 right-2/5 mx-auto w-[calc(100%-230px)] bottom-[-2px] h-px bg-gray-900'></span>
      </h3>
      {label.map(item => (
        <Input key={item} labelName={item} />
      ))}
    </div>
  );
}

export default Category;
