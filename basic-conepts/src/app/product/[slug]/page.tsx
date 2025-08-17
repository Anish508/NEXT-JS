// app/products/[slug]/page.tsx

type ProductPageProps = {
  params: {
    slug: string
  }
}

export default function ProductDetails({ params }: ProductPageProps) {
  const { slug } = params

  console.log(slug) // Works on server side (not in browser console)

  return <h1>Product Detail: {slug}</h1>
}
