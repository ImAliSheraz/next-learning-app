export default async function Page() {

  async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    return res.json();

  }

  const data = await getData()

  const HotelName = ({ name }: { name: string }) => {
    return (
      <h2 className="text-lg font-bold text-center sm:text-left">
        {name}
      </h2>
    );
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {data.map((hotel: { id: string; name: string }) => (
          <div key={hotel.id} className="w-full">
            <HotelName name={hotel.name} />
          </div>
        ))}
      </main>
    </div>
  );
}
