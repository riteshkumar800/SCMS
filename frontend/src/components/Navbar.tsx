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
function Navbar() {
  return (
    <div className="h-16 bg-white shadow px-6 flex items-center justify-between">

      <h2 className="font-semibold text-lg">
        Supply Chain Management System
      </h2>

      <div className="font-medium">
        Admin
      </div>

    </div>
  );
}

export default Navbar;