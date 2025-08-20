async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    stats: {
      users: 10000
    }
  }
}

export default async function Loading() {
  const data = await getData()
  return (<div>
    <h2>Loading Example:</h2>
    <p className="font-bold text-sm">{data.stats.users}</p>
  </div>
  );
}
