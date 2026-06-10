// import type { Supplier } from "../types/Supplier";

// interface Props {
//   suppliers: Supplier[];
// }

// function SupplierTable({
//   suppliers,
// }: Props) {
//   return (
//     <div className="bg-white rounded-xl p-5 shadow">

//       <table className="w-full">

//         <thead>
//           <tr className="border-b">
//             <th className="text-left p-2">Name</th>
//             <th className="text-left p-2">Email</th>
//             <th className="text-left p-2">Phone</th>
//             <th className="text-left p-2">City</th>
//           </tr>
//         </thead>

//         <tbody>
//           {suppliers.map((supplier) => (
//             <tr
//               key={supplier.id}
//               className="border-b"
//             >
//               <td className="p-2">
//                 {supplier.name}
//               </td>

//               <td className="p-2">
//                 {supplier.email}
//               </td>

//               <td className="p-2">
//                 {supplier.phone}
//               </td>

//               <td className="p-2">
//                 {supplier.city}
//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default SupplierTable;
import type { Supplier } from "../types/Supplier";

// interface Props {
//   suppliers: Supplier[];
//   onDelete: (id: number) => void;
// }
interface Props {
  suppliers: Supplier[];
  onDelete: (id: number) => void;
  onEdit: (supplier: Supplier) => void;
}

function SupplierTable({
  suppliers,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="bg-black rounded-xl p-5 shadow">

      <table className="w-full">

        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Phone</th>
            <th className="text-left p-3">City</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {suppliers.map((supplier) => (
            <tr
              key={supplier.id}
              className="border-b border-gray-800"
            >
              <td className="p-3">{supplier.name}</td>
              <td className="p-3">{supplier.email}</td>
              <td className="p-3">{supplier.phone}</td>
              <td className="p-3">{supplier.city}</td>

              <td className="p-3 flex gap-2">

                {/* <button
                  className="bg-blue-600 px-3 py-1 rounded"
                >
                  Edit
                </button> */}
                <button
  onClick={() =>
    onEdit(supplier)
  }
  className="bg-blue-600 px-3 py-1 rounded"
>
  Edit
</button>

                {/* <button
                  className="bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button> */}
                <button
  onClick={() =>
    onDelete(supplier.id)
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

    </div>
  );
}

export default SupplierTable;