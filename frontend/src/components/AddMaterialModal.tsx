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
      id: material?.id || Date.now(),
      name: material?.name || "",
      category:
        material?.category || "",
      quantity:
        material?.quantity || "",
    });

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

        <h2 className="text-2xl font-bold mb-5">
          {material
            ? "Edit Material"
            : "Add Material"}
        </h2>

        <div className="space-y-3">

          <input
            placeholder="Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full p-3 bg-black rounded"
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
            className="w-full p-3 bg-black rounded"
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
            className="w-full p-3 bg-black rounded"
          />

        </div>

        <div className="flex justify-end mt-4 gap-2">

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

export default AddMaterialModal;