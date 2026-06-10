import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (supplier: any) => void;
  supplier?: any;
}

function AddSupplierModal({
  onClose,
  onAdd,
  supplier,
}: Props) {
  const [formData, setFormData] = useState({
  id: supplier?.id || Date.now(),
  name: supplier?.name || "",
  email: supplier?.email || "",
  phone: supplier?.phone || "",
  city: supplier?.city || "",
});

//   const handleSubmit = () => {
//     onAdd({
//       id: Date.now(),
//       ...formData,
//     });
// const handleSubmit = () => {
//   onAdd(formData);
//   onClose();
// });

//     onClose();
//   };
const handleSubmit = () => {
  onAdd(formData);
  onClose();
};

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

        <h2 className="text-2xl font-bold mb-5">
  {supplier ? "Edit Supplier" : "Add Supplier"}
</h2>

        <div className="space-y-3">

          <input
          value={formData.name}
            placeholder="Name"
            className="w-full p-3 rounded bg-black"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

          <input
          value={formData.email}
            placeholder="Email"
            className="w-full p-3 rounded bg-black"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <input
          value={formData.phone}
            placeholder="Phone"
            className="w-full p-3 rounded bg-black"
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />

          <input
          value={formData.city}
            placeholder="City"
            className="w-full p-3 rounded bg-black"
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value,
              })
            }
          />

        </div>

        <div className="flex justify-end gap-3 mt-5">

          <button
            onClick={onClose}
            className="bg-gray-700 px-4 py-2 rounded"
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

export default AddSupplierModal;