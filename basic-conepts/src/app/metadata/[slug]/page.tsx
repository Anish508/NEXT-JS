const dummyData = {
  "1": { title: 'one' },
  "2": { title: 'two' },
  "3": { title: 'three' },
}

// This is for SEO metadata in Next.js App Router
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const data = dummyData[slug as keyof typeof dummyData]

  if (!data) {
    return {
      title: "Not Found",
      description: "The requested page does not exist."
    }
  }

  return {
    title: data.title,
    description: data.title
  }
}


export default async function DynamicMetaData({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const data = dummyData[slug as keyof typeof dummyData]

  return (
    <div>
      <h1>{data?.title || "Not Found"}</h1>
    </div>
  )
}
