// import { useState } from "react";

// interface Props {
//   onClose: () => void;
//   onAdd: (material: any) => void;
//   material?: any;
// }

// function AddMaterialModal({
//   onClose,
//   onAdd,
//   material,
// }: Props) {

//   const [formData, setFormData] =
//     useState({
//       id: material?.id || Date.now(),
//       name: material?.name || "",
//       category:
//         material?.category || "",
//       quantity:
//         material?.quantity || "",
//     });

//   const handleSubmit = () => {
//     onAdd(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

//       <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

//         <h2 className="text-2xl font-bold mb-5">
//           {material
//             ? "Edit Material"
//             : "Add Material"}
//         </h2>

//         <div className="space-y-3">

//           <input
//             placeholder="Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//             className="w-full p-3 bg-black rounded"
//           />

//           <input
//             placeholder="Category"
//             value={formData.category}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 category:
//                   e.target.value,
//               })
//             }
//             className="w-full p-3 bg-black rounded"
//           />

//           <input
//             placeholder="Quantity"
//             value={formData.quantity}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 quantity:
//                   e.target.value,
//               })
//             }
//             className="w-full p-3 bg-black rounded"
//           />

//         </div>

//         <div className="flex justify-end mt-4 gap-2">

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

// export default AddMaterialModal;
import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (material: any) => void;
  material?: any;
}

function AddMaterialModal({
  onClose,
  onAdd,
  material,
}: Props) {

  const [formData, setFormData] =
    useState({
      id:
        material?.id ||
        Date.now(),

      name:
        material?.name || "",

      category:
        material?.category || "",

      quantity:
        material?.quantity || "",

      unit:
        material?.unit || "",

      supplier:
        material?.supplier || "",

      description:
        material?.description || "",
    });

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#1f2937] border border-gray-700 rounded-xl w-[700px] p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          {material
            ? "Edit Material"
            : "Add Material"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Material Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({
                ...formData,
                category:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Quantity"
            value={formData.quantity}
            onChange={(e) =>
              setFormData({
                ...formData,
                quantity:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Unit"
            value={formData.unit}
            onChange={(e) =>
              setFormData({
                ...formData,
                unit:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Supplier"
            value={formData.supplier}
            onChange={(e) =>
              setFormData({
                ...formData,
                supplier:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

        </div>

        <textarea
          rows={4}
          placeholder="Material Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description:
                e.target.value,
            })
          }
          className="
          w-full
          mt-4
          p-3
          rounded
          bg-black
          border
          border-gray-700
          "
        />

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="
            bg-gray-600
            hover:bg-gray-700
            px-5
            py-2
            rounded
            "
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="
            bg-green-600
            hover:bg-green-700
            px-5
            py-2
            rounded
            "
          >
            Save Material
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddMaterialModal;