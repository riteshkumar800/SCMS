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
import { addActivity } from "../../services/activityService";
import { useEffect, useState } from "react";

interface SupplierType {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
}

function Supplier() {
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

  const [
    editingSupplier,
    setEditingSupplier,
  ] = useState<SupplierType | null>(
    null
  );

  useEffect(() => {
    localStorage.setItem(
      "suppliers",
      JSON.stringify(suppliers)
    );
  }, [suppliers]);

  const handleAddSupplier = (
    supplier: SupplierType
  ) => {
    setSuppliers([
      ...suppliers,
      supplier,
    ]);

    addActivity(
      `Supplier Added: ${supplier.name}`
    );
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

    addActivity(
      "Supplier Deleted"
    );
  };

  const handleUpdateSupplier = (
    updatedSupplier: SupplierType
  ) => {
    setSuppliers(
      suppliers.map((supplier) =>
        supplier.id ===
        updatedSupplier.id
          ? updatedSupplier
          : supplier
      )
    );

    addActivity(
      `Supplier Updated: ${updatedSupplier.name}`
    );

    setEditingSupplier(null);
  };

  const filteredSuppliers =
    suppliers.filter((supplier) =>
      supplier.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

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
          setSearch(
            e.target.value
          )
        }
        className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
      />

      <SupplierTable
        suppliers={filteredSuppliers}
        onDelete={
          handleDeleteSupplier
        }
        onEdit={(supplier) => {
          setEditingSupplier(
            supplier
          );
          setShowModal(true);
        }}
      />

      {showModal && (
        <AddSupplierModal
          supplier={
            editingSupplier
          }
          onClose={() => {
            setShowModal(false);
            setEditingSupplier(
              null
            );
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