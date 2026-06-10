// function Navbar() {
//   return (
//     <div
//       style={{
//         height: "60px",
//         background: "#334155",
//         color: "white",
//         display: "flex",
//         alignItems: "center",
//         paddingLeft: "20px",
//       }}
//     >
//       Supply Chain Management System
//     </div>
//   );
// }

// export default Navbar;
// function Navbar() {
//   return (
//     <div className="h-16 bg-white shadow px-6 flex items-center justify-between">

//       <h2 className="font-semibold text-lg">
//         Supply Chain Management System
//       </h2>

//       <div className="font-medium">
//         Admin
//       </div>

//     </div>
//   );
// }

// export default Navbar;
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="h-16 bg-white shadow px-6 flex items-center justify-between">

      <h2 className="font-semibold text-lg">
        Supply Chain Management System
      </h2>

      <div className="flex items-center gap-4">

        <span className="font-medium">
          Admin
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;