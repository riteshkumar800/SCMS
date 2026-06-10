// interface Props {
//   employees: any[];
//   onDelete: (id: number) => void;
//   onEdit: (employee: any) => void;
// }

// function EmployeeTable({
//   employees,
//   onDelete,
//   onEdit,
// }: Props) {
//   return (
//     <table className="w-full">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Department</th>
//           <th>Salary</th>
//           <th>Actions</th>
//         </tr>
//       </thead>

//       <tbody>
//         {employees.map((employee) => (
//           <tr key={employee.id}>
//             <td>{employee.name}</td>
//             <td>{employee.email}</td>
//             <td>{employee.department}</td>
//             <td>{employee.salary}</td>

//             <td>
//               <button
//                 onClick={() =>
//                   onEdit(employee)
//                 }
//                 className="bg-blue-600 px-3 py-1 rounded mr-2"
//               >
//                 Edit
//               </button>

//               <button
//                 onClick={() =>
//                   onDelete(employee.id)
//                 }
//                 className="bg-red-600 px-3 py-1 rounded"
//               >
//                 Delete
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default EmployeeTable;
function EmployeeTable({
  employees,
  onDelete,
  onEdit,
}: any) {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden">

      <table className="w-full">

        <thead>
          <tr className="border-b border-gray-700">

            <th className="text-left p-3">
              Name
            </th>

            <th className="text-left p-3">
              Email
            </th>

            <th className="text-left p-3">
              Department
            </th>

            <th className="text-left p-3">
              Salary
            </th>

            <th className="text-left p-3">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {employees.map(
            (employee: any) => (
              <tr
                key={employee.id}
                className="border-b border-gray-800"
              >

                <td className="p-3">
                  {employee.name}
                </td>

                <td className="p-3">
                  {employee.email}
                </td>

                <td className="p-3">
                  {employee.department}
                </td>

                <td className="p-3">
                  {employee.salary}
                </td>

                <td className="p-3 flex gap-2">

                  <button
                    onClick={() =>
                      onEdit(employee)
                    }
                    className="bg-blue-600 px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      onDelete(employee.id)
                    }
                    className="bg-red-600 px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;