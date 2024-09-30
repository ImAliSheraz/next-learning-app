

export default async function Page() {

  async function getMountainsData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    return res.json();

  }

  const data = await getMountainsData()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <table>
          <thead>
            <tr>
              <th>Lift Name</th>
              <th>Current Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(lift => {
              return (
                <tr key={lift.id}>
                  <td>{lift.name}</td>
                  <td>{lift.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
