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
// import type { ReactNode } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

// interface Props {
//   children: ReactNode;
// }

// function MainLayout({ children }: Props) {
//   return (
//     <div className="flex">

//       <Sidebar />

//       <div className="flex-1">

//         <Navbar />

//         <main className="p-6">
//           {children}
//         </main>

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

function MainLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-[#0f172a]">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-6 bg-[#111827] min-h-screen">

          <div
            className="
            bg-[#1f2937]
            rounded-xl
            shadow-lg
            border
            border-gray-700
            p-6
            "
          >
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}

export default MainLayout;