// import { useState } from "react";

// interface Props {
//   onClose: () => void;
//   onAdd: (store: any) => void;
//   store?: any;
// }

// function AddStoreModal({
//   onClose,
//   onAdd,
//   store,
// }: Props) {

//   const [formData, setFormData] = useState({
//     id: store?.id || Date.now(),
//     name: store?.name || "",
//     location: store?.location || "",
//     capacity: store?.capacity || 0,
//   });

//   const handleSubmit = () => {
//     onAdd(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

//       <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

//         <h2 className="text-2xl font-bold mb-5">
//           {store
//             ? "Edit Store"
//             : "Add Store"}
//         </h2>

//         <div className="space-y-3">

//           <input
//             value={formData.name}
//             placeholder="Store Name"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//             className="w-full p-3 rounded bg-black"
//           />

//           <input
//             value={formData.location}
//             placeholder="Location"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 location: e.target.value,
//               })
//             }
//             className="w-full p-3 rounded bg-black"
//           />

//           <input
//             type="number"
//             value={formData.capacity}
//             placeholder="Capacity"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 capacity: Number(
//                   e.target.value
//                 ),
//               })
//             }
//             className="w-full p-3 rounded bg-black"
//           />

//         </div>

//         <div className="flex justify-end gap-3 mt-5">

//           <button
//             onClick={onClose}
//             className="bg-gray-600 px-4 py-2 rounded"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             className="bg-green-600 px-4 py-2 rounded"
//           >
//             Save
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default AddStoreModal;
import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (store: any) => void;
  store?: any;
}

function AddStoreModal({
  onClose,
  onAdd,
  store,
}: Props) {

  const [formData, setFormData] = useState({
    id: store?.id || Date.now(),
    district: store?.district || "",
    subdivision: store?.subdivision || "",
    block: store?.block || "",
    storeCode: store?.storeCode || "",
    storeName: store?.storeName || "",
    storeType: store?.storeType || "",
  });

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-gray-900 p-6 rounded-xl w-[550px]">

        <h2 className="text-2xl font-bold mb-5">
          {store
            ? "Edit Store"
            : "Add Store"}
        </h2>

        <div className="space-y-3">

          <input
            value={formData.district}
            placeholder="District"
            onChange={(e) =>
              setFormData({
                ...formData,
                district: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <input
            value={formData.subdivision}
            placeholder="Sub Division"
            onChange={(e) =>
              setFormData({
                ...formData,
                subdivision: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <input
            value={formData.block}
            placeholder="Block"
            onChange={(e) =>
              setFormData({
                ...formData,
                block: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <input
            value={formData.storeCode}
            placeholder="Store Code"
            onChange={(e) =>
              setFormData({
                ...formData,
                storeCode: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <input
            value={formData.storeName}
            placeholder="Store Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                storeName: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <select
            value={formData.storeType}
            onChange={(e) =>
              setFormData({
                ...formData,
                storeType: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          >
            <option value="">
              Select Store Type
            </option>

            <option value="BLOCK">
              BLOCK
            </option>

            <option value="DIVISIONAL">
              DIVISIONAL
            </option>

            <option value="DISTRICT">
              DISTRICT
            </option>

          </select>

        </div>

        <div className="flex justify-end gap-3 mt-5">

          <button
            onClick={onClose}
            className="bg-gray-600 px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-green-600 px-4 py-2 rounded"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddStoreModal;