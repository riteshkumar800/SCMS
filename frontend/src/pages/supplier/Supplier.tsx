// import MainLayout from "../../layouts/MainLayout";

// function Supplier() {
//   return (
//     <MainLayout>
//       <h1>Supplier Page</h1>
//     </MainLayout>
//   );
// }

// export default Supplier;
// function Supplier() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">
//         Supplier Management
//       </h1>
//     </div>
//   );
// }

// export default Supplier;
// import SupplierTable from "../../components/SupplierTable";
// import { suppliers } from "../../services/supplierService";

// function Supplier() {
//   return (
//     <div>

//       <h1 className="text-3xl font-bold mb-6">
//         Supplier Management
//       </h1>

//       <SupplierTable
//         suppliers={suppliers}
//       />

//     </div>
//   );
// }

// export default Supplier;
// import { useState } from "react";
import SupplierTable from "../../components/SupplierTable";
import AddSupplierModal from "../../components/AddSupplierModal";
import { suppliers as initialSuppliers } from "../../services/supplierService";
import { useEffect, useState } from "react";

function Supplier() {

//   const [suppliers, setSuppliers] =
//     useState(initialSuppliers);
interface SupplierType {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
}

const [suppliers, setSuppliers] =
  useState<SupplierType[]>(() => {

    const storedSuppliers =
      localStorage.getItem(
        "suppliers"
      );

    return storedSuppliers
      ? JSON.parse(storedSuppliers)
      : initialSuppliers;
  });

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

    useEffect(() => {
  localStorage.setItem(
    "suppliers",
    JSON.stringify(suppliers)
  );
}, [suppliers]);

  const handleAddSupplier = (
    supplier: any
  ) => {
    setSuppliers([
      ...suppliers,
      supplier,
    ]);
  };

  const handleDeleteSupplier = (
  id: number
) => {
  setSuppliers(
    suppliers.filter(
      (supplier) =>
        supplier.id !== id
    )
  );
};
const handleUpdateSupplier = (
  updatedSupplier: any
) => {
  setSuppliers(
    suppliers.map((supplier) =>
      supplier.id === updatedSupplier.id
        ? updatedSupplier
        : supplier
    )
  );

  setEditingSupplier(null);
};

  const filteredSuppliers =
    suppliers.filter((supplier) =>
      supplier.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    const [editingSupplier, setEditingSupplier] =
  useState<any>(null);

  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Supplier Management
        </h1>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="bg-green-600 px-4 py-2 rounded"
        >
          Add Supplier
        </button>

      </div>

      <input
        type="text"
        placeholder="Search supplier..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
      />

      {/* <SupplierTable
        suppliers={filteredSuppliers}
      /> */}
      {/* <SupplierTable
  suppliers={filteredSuppliers}
  onDelete={handleDeleteSupplier}
/> */}
<SupplierTable
  suppliers={filteredSuppliers}
  onDelete={handleDeleteSupplier}
  onEdit={(supplier) => {
    setEditingSupplier(
      supplier
    );
    setShowModal(true);
  }}
/>

      {showModal && (
        // <AddSupplierModal
        //   onClose={() =>
        //     setShowModal(false)
        //   }
        //   onAdd={handleAddSupplier}
        // />
        <AddSupplierModal
  supplier={editingSupplier}
  onClose={() => {
    setShowModal(false);
    setEditingSupplier(null);
  }}
  onAdd={
    editingSupplier
      ? handleUpdateSupplier
      : handleAddSupplier
  }
/>
      )}

    </div>
  );
}

export default Supplier;