// import type { StoreType } from "../types/Store";

// interface Props {
//   stores: StoreType[];
//   onDelete: (id: number) => void;
//   onEdit: (store: StoreType) => void;
// }

// function StoreTable({
//   stores,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <div className="bg-gray-900 rounded-xl overflow-hidden">

//       <table className="w-full">

//         <thead>

// <tr>

// <th>District</th>

// <th>Sub Division</th>

// <th>Block</th>

// <th>Store Code</th>

// <th>Store Name</th>

// <th>Store Type</th>

// <th>Actions</th>

// </tr>

// </thead>

//         {/* <tbody>

//           {stores.map((store) => (
//             <tr
//               key={store.id}
//               className="border-b border-gray-800"
//             >

//               <td className="p-3">
//                 {store.name}
//               </td>

//               <td className="p-3">
//                 {store.location}
//               </td>

//               <td className="p-3">
//                 {store.capacity}
//               </td>

//               <td className="p-3 flex gap-2">

//                 <button
//                   onClick={() =>
//                     onEdit(store)
//                   }
//                   className="bg-blue-600 px-3 py-1 rounded"
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() =>
//                     onDelete(store.id)
//                   }
//                   className="bg-red-600 px-3 py-1 rounded"
//                 >
//                   Delete
//                 </button>

//               </td>

//             </tr>
//           ))}

//         </tbody> */}
//         <tbody>

// {stores.map((store) => (

// <tr key={store.id}>

// <td>{store.district}</td>

// <td>{store.subdivision}</td>

// <td>{store.block}</td>

// <td>{store.storeCode}</td>

// <td>{store.storeName}</td>

// <td>{store.storeType}</td>

// <td>

// <button>Edit</button>

// <button>Delete</button>

// </td>

// </tr>

// ))}

// </tbody>

//       </table>

//     </div>
//   );
// }

// export default StoreTable;
import type { StoreType } from "../types/Store";

interface Props {
  stores: StoreType[];
  onDelete: (id: number) => void;
  onEdit: (store: StoreType) => void;
}

function StoreTable({
  stores,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">

      <table className="w-full">

        <thead>

          <tr className="border-b border-gray-800">

            <th className="p-3 text-left">
              District
            </th>

            <th className="p-3 text-left">
              Sub Division
            </th>

            <th className="p-3 text-left">
              Block
            </th>

            <th className="p-3 text-left">
              Store Code
            </th>

            <th className="p-3 text-left">
              Store Name
            </th>

            <th className="p-3 text-left">
              Store Type
            </th>

            <th className="p-3 text-left">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {stores.map((store) => (

            <tr
              key={store.id}
              className="border-b border-gray-800"
            >

              <td className="p-3">
                {store.district}
              </td>

              <td className="p-3">
                {store.subdivision}
              </td>

              <td className="p-3">
                {store.block}
              </td>

              <td className="p-3">
                {store.storeCode}
              </td>

              <td className="p-3">
                {store.storeName}
              </td>

              <td className="p-3">
                {store.storeType}
              </td>

              <td className="p-3 flex gap-2">

                <button
                  onClick={() =>
                    onEdit(store)
                  }
                  className="bg-blue-600 px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    onDelete(store.id)
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

export default StoreTable;