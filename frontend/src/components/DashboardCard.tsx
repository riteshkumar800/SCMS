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
interface DashboardCardProps {
  title: string;
  value: string;
}

function DashboardCard({
  title,
  value,
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>

    </div>
  );
}

export default DashboardCard;