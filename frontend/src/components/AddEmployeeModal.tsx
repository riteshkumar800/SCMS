// import { useState } from "react";

// interface Props {
//   onClose: () => void;
//   onAdd: (employee: any) => void;
//   employee?: any;
// }

// function AddEmployeeModal({
//   onClose,
//   onAdd,
//   employee,
// }: Props) {

//   const [formData, setFormData] = useState({
//     id: employee?.id || Date.now(),
//     name: employee?.name || "",
//     email: employee?.email || "",
//     department: employee?.department || "",
//     salary: employee?.salary || 0,
//   });

//   const handleSubmit = () => {
//     onAdd(formData);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex justify-center items-center">

//       <div className="bg-gray-900 p-6 rounded-xl w-[500px]">

//         <h2 className="text-2xl font-bold mb-5">
//           {employee
//             ? "Edit Employee"
//             : "Add Employee"}
//         </h2>

//         <div className="space-y-3">

//           <input
//             value={formData.name}
//             placeholder="Name"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//             className="w-full p-3 rounded bg-black"
//           />

//           <input
//             value={formData.email}
//             placeholder="Email"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 email: e.target.value,
//               })
//             }
//             className="w-full p-3 rounded bg-black"
//           />

//           <input
//             value={formData.department}
//             placeholder="Department"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 department: e.target.value,
//               })
//             }
//             className="w-full p-3 rounded bg-black"
//           />

//           <input
//             type="number"
//             value={formData.salary}
//             placeholder="Salary"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 salary: Number(e.target.value),
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

// export default AddEmployeeModal;
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

  const [formData, setFormData] =
    useState({
      id:
        employee?.id ||
        Date.now(),

      employeeId:
        employee?.employeeId ||
        "",

      name:
        employee?.name || "",

      email:
        employee?.email || "",

      mobile:
        employee?.mobile || "",

      department:
        employee?.department ||
        "",

      designation:
        employee?.designation ||
        "",

      salary:
        employee?.salary || 0,

      joiningDate:
        employee?.joiningDate ||
        "",

      status:
        employee?.status ||
        "Active",
    });

  const handleSubmit = () => {
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">

      <div className="bg-[#1f2937] border border-gray-700 rounded-xl w-[750px] p-6 shadow-xl">

        <h2 className="text-2xl font-bold text-white mb-6">
          {employee
            ? "Edit Employee"
            : "Add Employee"}
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Employee ID"
            value={formData.employeeId}
            onChange={(e) =>
              setFormData({
                ...formData,
                employeeId:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Employee Name"
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
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                mobile:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Department"
            value={formData.department}
            onChange={(e) =>
              setFormData({
                ...formData,
                department:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            placeholder="Designation"
            value={formData.designation}
            onChange={(e) =>
              setFormData({
                ...formData,
                designation:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="number"
            placeholder="Salary"
            value={formData.salary}
            onChange={(e) =>
              setFormData({
                ...formData,
                salary: Number(
                  e.target.value
                ),
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <input
            type="date"
            value={
              formData.joiningDate
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                joiningDate:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          />

          <select
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status:
                  e.target.value,
              })
            }
            className="p-3 rounded bg-black border border-gray-700"
          >
            <option>
              Active
            </option>

            <option>
              Inactive
            </option>
          </select>

        </div>

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
            Save Employee
          </button>

        </div>

      </div>

    </div>
  );
}

export default AddEmployeeModal;