interface Props {
  manufacturers: any[];
  onDelete: (id: number) => void;
  onEdit: (manufacturer: any) => void;
}

function ManufacturerTable({
  manufacturers,
  onDelete,
  onEdit,
}: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-gray-700 text-left">
          <th className="p-3">Name</th>
          <th className="p-3">Location</th>
          <th className="p-3">Contact</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {manufacturers.map((manufacturer) => (
          <tr
            key={manufacturer.id}
            className="border-b border-gray-800"
          >
            <td className="p-3">
              {manufacturer.name}
            </td>

            <td className="p-3">
              {manufacturer.location}
            </td>

            <td className="p-3">
              {manufacturer.contact}
            </td>

            <td className="p-3">
              <button
                onClick={() =>
                  onEdit(manufacturer)
                }
                className="bg-blue-600 px-3 py-1 rounded mr-2"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(manufacturer.id)
                }
                className="bg-red-600 px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ManufacturerTable;