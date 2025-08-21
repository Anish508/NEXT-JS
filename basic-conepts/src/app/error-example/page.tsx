async function getProducts() {
      const error = Math.random() > 0.5;
      if (error) {
            throw new Error("Failed to fetch products");
      }
      return [
            { id: 1, name: "one" },
            { id: 2, name: "two" },
            { id: 3, name: "three" },
      ];
}

export default async function ErrorExample() {
      try {
            const products = await getProducts();

            return (
                  <div>
                        {products.map((product) => (
                              <div key={product.id}>
                                    <h2>{product.name}</h2>
                              </div>
                        ))}
                  </div>
            );
      } catch (e: unknown) {
            if (e instanceof Error) {
                  return <h2 style={{ color: "red" }}>{e.message}</h2>;
            }
            return <h2 style={{ color: "red" }}>Something went wrong</h2>;
      }

}
