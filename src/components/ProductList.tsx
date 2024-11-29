import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../api/fakeStoreApi';

type ProductsProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export default function ProductList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2 className="text-[1.2rem] text-neutral-900 font-semibold pb-2">
        Product List:
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((product: ProductsProps) => (
          <div
            key={product.id}
            className="bg-neutral-200 rounded-lg flex flex-col gap-y-2 p-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] object-cover rounded-md"
            />
            <div>
              <p className="text-[0.8rem] text-neutral-600">
                {product.category}
              </p>
              <h3 className="text-[1rem] text-neutral-800 font-medium">
                {product.title.length > 20
                  ? `${product.title.slice(0, 20)}...`
                  : product.title}
              </h3>
            </div>
            <p className="text-[0.9rem] text-neutral-800">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
