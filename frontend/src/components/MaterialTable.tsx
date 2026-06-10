interface Props {
  materials: any[];
  onDelete: (id: number) => void;
  onEdit: (material: any) => void;
}

function MaterialTable({
  materials,
  onDelete,
  onEdit,
}: Props) {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-left border-b border-gray-700">
          <th className="p-3">Name</th>
          <th className="p-3">Category</th>
          <th className="p-3">Quantity</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {materials.map((material) => (
          <tr
            key={material.id}
            className="border-b border-gray-800"
          >
            <td className="p-3">
              {material.name}
            </td>

            <td className="p-3">
              {material.category}
            </td>

            <td className="p-3">
              {material.quantity}
            </td>

            <td className="p-3">
              <button
                onClick={() =>
                  onEdit(material)
                }
                className="bg-blue-600 px-3 py-1 rounded mr-2"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  onDelete(material.id)
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

export default MaterialTable;