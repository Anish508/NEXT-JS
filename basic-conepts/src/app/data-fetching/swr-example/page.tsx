"use client";

import useSWR from "swr";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function SWRExample() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://dummyjson.com/products",
    fetcher,
    {
      revalidateOnFocus: true,
      refreshInterval: 10000,
      errorRetryCount: 3,
    }
  );

  if (isLoading) return <h1 className="text-xl font-bold">Loading.....</h1>;
  if (error)
    return (
      <h1 className="text-red-500 font-bold">Failed to load products ❌</h1>
    );

  return (
    <div className="grid gap-4 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">SWR Data Fetching</h1>
        <button
          onClick={() => mutate()}
          className="px-3 py-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Refresh
        </button>
      </div>

      {data?.products.map((product: Product) => (
        <div
          key={product.id}
          className="max-w-sm w-full bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
        >
          <h1 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h1>
          <p className="text-sm text-gray-600 mt-2">{product.description}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>
            <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
