function RecentActivity() {
  const data = [
    {
      id: 1,
      action: "Supplier Added",
      user: "Admin",
    },
    {
      id: 2,
      action: "Material Updated",
      user: "Manager",
    },
    {
      id: 3,
      action: "Manufacturer Created",
      user: "Admin",
    },
  ];

  return (
    <div className="bg-white mt-8 rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Recent Activities
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">Action</th>
            <th className="text-left py-2">User</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-3">{item.action}</td>
              <td>{item.user}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default RecentActivity;