import Card from './Card';

function Product({ products }) {
  return (
    <>
      <div className='mt-5 flex lg:justify-end justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
          {products.length &&
            products.map(product => {
              return <Card key={product.id} product={[product]} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Product;
