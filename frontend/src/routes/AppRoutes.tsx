import { BrowserRouter, Routes, Route } from "react-router-dom";
import Supplier from "../pages/supplier/Supplier";
import Material from "../pages/material/Material";

import Login from "../pages/Login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Manufacturer from "../pages/manufacturer/Manufacturer";
import Employee from "../pages/employee/Employee";
// import Employee from "../pages/employee/Employee";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/material" element={<Material />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manufacturer" element={<Manufacturer />} />

        <Route
  path="/employee"
  element={<Employee />}
/>

<Route
  path="/employee"
  element={<Employee />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;