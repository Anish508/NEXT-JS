import Link from "next/link"
function Product() {
      const products = [
            {
                  id: 1,
                  name: "laptop"
            },
            {
                  id: 2,
                  name: "mobile phone"
            },
            {
                  id: 3,
                  name: "clothes"
            },
      ]
      return (
            <div className="text-2xl font-bold mb-4">
                  <h1 className="text-center">Products</h1>
                  <div className="grid gap-4">
                        {
                              products.map(product => (
                                    <div key={product.id} className="border p-4 rounded text-center">
                                          <h2>{product.id}</h2>
                                          <h1>{product.name}</h1>
                                          <Link href={`/product/${product.id}`}>
                                          view detail
                                          </Link>
                                    </div>
                              ))
                        }
                  </div>
            </div>
      )
}

export default Product