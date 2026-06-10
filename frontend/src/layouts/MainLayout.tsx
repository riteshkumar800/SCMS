// import type { ReactNode } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// interface Props {
//   children: ReactNode;
// }

// function MainLayout({ children }: Props) {
//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />

//       <div style={{ flex: 1 }}>
//         <Navbar />

//         <div style={{ padding: "20px" }}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;
import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

interface Props {
  children: ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;