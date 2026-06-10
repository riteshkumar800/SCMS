// interface DashboardCardProps {
//   title: string;
//   value: string;
// }

// function DashboardCard({ title, value }: DashboardCardProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6">
//       <h3 className="text-gray-500 text-sm">{title}</h3>

//       <p className="text-3xl font-bold mt-2">
//         {value}
//       </p>
//     </div>
//   );
// }

// export default DashboardCard;
// interface DashboardCardProps {
//   title: string;
//   value: string;
// }

// function DashboardCard({
//   title,
//   value,
// }: DashboardCardProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

//       <p className="text-gray-500 text-sm">
//         {title}
//       </p>

//       <h2 className="text-4xl font-bold mt-3">
//         {value}
//       </h2>

//     </div>
//   );
// }

// export default DashboardCard;
import {
  Package,
  Truck,
  Factory,
  Users,
  Warehouse,
} from "lucide-react";

interface DashboardCardProps {
  title: string;
  value: string;
}

function DashboardCard({
  title,
  value,
}: DashboardCardProps) {

  const getIcon = () => {

    switch (title) {

      case "Suppliers":
        return (
          <Truck
            size={30}
          />
        );

      case "Materials":
        return (
          <Package
            size={30}
          />
        );

      case "Manufacturers":
        return (
          <Factory
            size={30}
          />
        );

      case "Employees":
        return (
          <Users
            size={30}
          />
        );

      case "Stores":
        return (
          <Warehouse
            size={30}
          />
        );

      default:
        return (
          <Package
            size={30}
          />
        );
    }
  };

  return (
    <div
      className="
      bg-[#1f2937]
      border
      border-gray-700
      rounded-xl
      p-5
      shadow-lg
      hover:scale-105
      transition-all
      duration-300
      "
    >

      <div className="flex justify-between items-center">

        <div>

          <p
            className="
            text-gray-400
            text-sm
            "
          >
            {title}
          </p>

          <h2
            className="
            text-4xl
            font-bold
            mt-2
            text-white
            "
          >
            {value}
          </h2>

        </div>

        <div
          className="
          bg-green-600
          p-3
          rounded-full
          text-white
          "
        >
          {getIcon()}
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;