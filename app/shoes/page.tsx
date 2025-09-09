type Shoe = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
};

export default async function ShoesPage() {
  const res = await fetch("http://localhost:3000/api/shoes", {
    cache: "no-store",
  });

  if (!res.ok) {
    // Surface a readable error if API fails
    throw new Error("Failed to fetch shoes");
  }

  const shoes: Shoe[] = await res.json();

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Shoes</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="p-4 rounded-xl border shadow">
            <h2 className="text-xl font-semibold">{shoe.name}</h2>
            <p className="text-sm text-gray-600">{shoe.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-semibold">${shoe.price}</span>
              <span className="text-gray-500">Stock: {shoe.stock}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
