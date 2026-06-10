import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (manufacturer: any) => void;
  manufacturer?: any;
}

function AddManufacturerModal({
  onClose,
  onAdd,
  manufacturer,
}: Props) {

  const [formData, setFormData] =
    useState({
      id: manufacturer?.id || Date.now(),
      name: manufacturer?.name || "",
      location:
        manufacturer?.location || "",
      contact:
        manufacturer?.contact || "",
    });

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

        <h2 className="text-2xl font-bold mb-5">
          {manufacturer
            ? "Edit Manufacturer"
            : "Add Manufacturer"}
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
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                location:
                  e.target.value,
              })
            }
            className="w-full p-3 bg-black rounded"
          />

          <input
            placeholder="Contact"
            value={formData.contact}
            onChange={(e) =>
              setFormData({
                ...formData,
                contact:
                  e.target.value,
              })
            }
            className="w-full p-3 bg-black rounded"
          />

        </div>

        <div className="flex justify-end gap-2 mt-4">

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

export default AddManufacturerModal;