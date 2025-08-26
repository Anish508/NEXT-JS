"use client";

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
}

export default function useEffectExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);

  async function fetchListOfProducts() {
    try {
      setIsLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();

      if (result?.products) {
        setData(result.products);
      }
    } catch (error) {
      console.error("Error while fetching", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  if (isLoading) return <h1 className="text-xl font-bold">Loading...</h1>;

  return (
    <div className="grid gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Server side data fetching</h1>
      {data.map((product) => (
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
