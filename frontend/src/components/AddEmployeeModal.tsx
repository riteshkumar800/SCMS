import { useState } from "react";

interface Props {
  onClose: () => void;
  onAdd: (employee: any) => void;
  employee?: any;
}

function AddEmployeeModal({
  onClose,
  onAdd,
  employee,
}: Props) {

  const [formData, setFormData] = useState({
    id: employee?.id || Date.now(),
    name: employee?.name || "",
    email: employee?.email || "",
    department: employee?.department || "",
    salary: employee?.salary || 0,
  });

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

      <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

        <h2 className="text-2xl font-bold mb-5">
          {employee
            ? "Edit Employee"
            : "Add Employee"}
        </h2>

        <div className="space-y-3">

          <input
            value={formData.name}
            placeholder="Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <input
            value={formData.email}
            placeholder="Email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <input
            value={formData.department}
            placeholder="Department"
            onChange={(e) =>
              setFormData({
                ...formData,
                department: e.target.value,
              })
            }
            className="w-full p-3 rounded bg-black"
          />

          <input
            type="number"
            value={formData.salary}
            placeholder="Salary"
            onChange={(e) =>
              setFormData({
                ...formData,
                salary: Number(e.target.value),
              })
            }
            className="w-full p-3 rounded bg-black"
          />

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

export default AddEmployeeModal;