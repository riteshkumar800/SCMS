// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div
//       style={{
//         width: "220px",
//         height: "100vh",
//         background: "#1e293b",
//         color: "white",
//         padding: "20px",
//       }}
//     >
//       <h2>SCMS</h2>

//       <ul style={{ listStyle: "none", padding: 0 }}>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/manufacturer">Manufacturer</Link></li>
//         <li><Link to="/supplier">Supplier</Link></li>
//         <li><Link to="/material">Material</Link></li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
// import { Link } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-slate-900 text-white p-5">

//       <h1 className="text-2xl font-bold mb-8">
//         SCMS
//       </h1>

//       <nav className="flex flex-col gap-4">

//         <Link
//           to="/dashboard"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Dashboard
//         </Link>

//         <Link
//           to="/manufacturer"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Manufacturer
//         </Link>

//         <Link
//           to="/supplier"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Supplier
//         </Link>

//         <Link
//           to="/material"
//           className="hover:bg-slate-700 p-2 rounded"
//         >
//           Material
//         </Link>

//       </nav>
//     </div>
//   );
// }

// export default Sidebar;
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Factory,
  Truck,
  Package,
  Users,
} from "lucide-react";
// import {
//   Package,
// } from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Manufacturer",
      path: "/manufacturer",
      icon: <Factory size={18} />,
    },
    {
      name: "Supplier",
      path: "/supplier",
      icon: <Truck size={18} />,
    },
    {
      name: "Material",
      path: "/material",
      icon: <Package size={18} />,
    },
    {
  name: "Store",
  path: "/store",
  icon: <Package size={18} />,
},

    {
  name: "Employee",
  path: "/employee",
  icon: <Users size={18} />,
}
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-5">
      <h1 className="text-2xl font-bold mb-8">
        SCMS
      </h1>

      <div className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;