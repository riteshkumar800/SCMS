// function RecentActivity() {
//   const data = [
//     {
//       id: 1,
//       action: "Supplier Added",
//       user: "Admin",
//     },
//     {
//       id: 2,
//       action: "Material Updated",
//       user: "Manager",
//     },
//     {
//       id: 3,
//       action: "Manufacturer Created",
//       user: "Admin",
//     },
//   ];

//   return (
//     <div className="bg-white mt-8 rounded-xl shadow-md p-6">

//       <h2 className="text-xl font-semibold mb-4">
//         Recent Activities
//       </h2>

//       <table className="w-full">
//         <thead>
//           <tr className="border-b">
//             <th className="text-left py-2">Action</th>
//             <th className="text-left py-2">User</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id} className="border-b">
//               <td className="py-3">{item.action}</td>
//               <td>{item.user}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }

// export default RecentActivity;

import { useEffect, useState } from "react";
import { getActivities } from "../services/activityService";
import type { Activity } from "../services/activityService";

function RecentActivity() {
  const [activities, setActivities] =
    useState<Activity[]>([]);

  useEffect(() => {
    const loadActivities = () => {
      setActivities(
        getActivities()
      );
    };

    loadActivities();

    window.addEventListener(
      "activityUpdated",
      loadActivities
    );

    return () => {
      window.removeEventListener(
        "activityUpdated",
        loadActivities
      );
    };
  }, []);

  return (
    <div className="bg-black rounded-xl p-5">

      <h2 className="text-2xl font-bold mb-4">
        Recent Activities
      </h2>

      <table className="w-full">

        <thead>
          <tr>
            <th className="text-left p-2">
              Action
            </th>

            <th className="text-left p-2">
              User
            </th>

            <th className="text-left p-2">
              Time
            </th>
          </tr>
        </thead>

        <tbody>

          {activities.length === 0 ? (
            <tr>
              <td
                colSpan={3}
                className="p-4 text-center"
              >
                No Activities Yet
              </td>
            </tr>
          ) : (
            activities.map(
              (activity, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-700"
                >
                  <td className="p-2">
                    {activity.action}
                  </td>

                  <td className="p-2">
                    {activity.user}
                  </td>

                  <td className="p-2">
                    {activity.time}
                  </td>
                </tr>
              )
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default RecentActivity;