import Product from "@/app/product/page";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
}
interface ProductResponse {
  products: Product[];
  total: number;
}

async function getProducts(): Promise<ProductResponse> {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

async function ServerSideFetch() {
  const products = await getProducts();

  return (
    <div className="grid gap-1">
      <h1>Server side data fetching</h1>
      <h3>{products.total}</h3>
      {products?.products.map((product) => (
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
export default ServerSideFetch;
