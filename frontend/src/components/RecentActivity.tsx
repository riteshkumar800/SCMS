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

// import { useEffect, useState } from "react";
// import { getActivities } from "../services/activityService";
// import type { Activity } from "../services/activityService";

// function RecentActivity() {
//   const [activities, setActivities] =
//     useState<Activity[]>([]);

//   useEffect(() => {
//     const loadActivities = () => {
//       setActivities(
//         getActivities()
//       );
//     };

//     loadActivities();

//     window.addEventListener(
//       "activityUpdated",
//       loadActivities
//     );

//     return () => {
//       window.removeEventListener(
//         "activityUpdated",
//         loadActivities
//       );
//     };
//   }, []);

//   return (
//     <div className="bg-black rounded-xl p-5">

//       <h2 className="text-2xl font-bold mb-4">
//         Recent Activities
//       </h2>

//       <table className="w-full">

//         <thead>
//           <tr>
//             <th className="text-left p-2">
//               Action
//             </th>

//             <th className="text-left p-2">
//               User
//             </th>

//             <th className="text-left p-2">
//               Time
//             </th>
//           </tr>
//         </thead>

//         <tbody>

//           {activities.length === 0 ? (
//             <tr>
//               <td
//                 colSpan={3}
//                 className="p-4 text-center"
//               >
//                 No Activities Yet
//               </td>
//             </tr>
//           ) : (
//             activities.map(
//               (activity, index) => (
//                 <tr
//                   key={index}
//                   className="border-t border-gray-700"
//                 >
//                   <td className="p-2">
//                     {activity.action}
//                   </td>

//                   <td className="p-2">
//                     {activity.user}
//                   </td>

//                   <td className="p-2">
//                     {activity.time}
//                   </td>
//                 </tr>
//               )
//             )
//           )}

//         </tbody>

//       </table>

//     </div>
//   );
// }

// export default RecentActivity;
import { useEffect, useState } from "react";
import {
  getActivities,
} from "../services/activityService";

import type {
  Activity,
} from "../services/activityService";

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
    <div
      className="
      bg-[#1f2937]
      border
      border-gray-700
      rounded-xl
      shadow-lg
      "
    >

      {/* Header */}

      <div
        className="
        flex
        justify-between
        items-center
        p-5
        border-b
        border-gray-700
        "
      >

        <div>

          <h2
            className="
            text-2xl
            font-bold
            text-white
            "
          >
            Recent Activities
          </h2>

          <p
            className="
            text-sm
            text-gray-400
            mt-1
            "
          >
            Latest system activities
          </p>

        </div>

      </div>

      {/* Activity List */}

      <div className="p-4">

        {activities.length === 0 ? (

          <div
            className="
            text-center
            py-10
            text-gray-400
            "
          >
            No Activities Yet
          </div>

        ) : (

          <div className="space-y-3">

            {activities
              .slice()
              .reverse()
              .map(
                (
                  activity,
                  index
                ) => (

                  <div
                    key={index}
                    className="
                    flex
                    justify-between
                    items-center
                    bg-[#111827]
                    border
                    border-gray-700
                    rounded-lg
                    p-4
                    hover:bg-gray-800
                    transition
                    "
                  >

                    <div>

                      <p
                        className="
                        text-white
                        font-medium
                        "
                      >
                        {
                          activity.action
                        }
                      </p>

                      <p
                        className="
                        text-gray-400
                        text-sm
                        "
                      >
                        User:
                        {" "}
                        {
                          activity.user
                        }
                      </p>

                    </div>

                    <div
                      className="
                      text-sm
                      text-gray-500
                      "
                    >
                      {
                        activity.time
                      }
                    </div>

                  </div>

                )
              )}

          </div>

        )}

      </div>

    </div>
  );
}

export default RecentActivity;