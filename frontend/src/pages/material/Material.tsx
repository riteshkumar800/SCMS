import MaterialTable from "../../components/MaterialTable";
import AddMaterialModal from "../../components/AddMaterialModal";
import { materials as initialMaterials } from "../../services/materialService";
import { useEffect, useState } from "react";

interface MaterialType {
  id: number;
  name: string;
  category: string;
  quantity: number;
}

function Material() {

  const [materials, setMaterials] =
    useState<MaterialType[]>(() => {

      const storedMaterials =
        localStorage.getItem(
          "materials"
        );

      return storedMaterials
        ? JSON.parse(storedMaterials)
        : initialMaterials;
    });

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editingMaterial, setEditingMaterial] =
    useState<any>(null);

  useEffect(() => {
    localStorage.setItem(
      "materials",
      JSON.stringify(materials)
    );
  }, [materials]);

  const handleAddMaterial = (
    material: any
  ) => {
    setMaterials([
      ...materials,
      material,
    ]);
  };

  const handleDeleteMaterial = (
    id: number
  ) => {
    setMaterials(
      materials.filter(
        (material) =>
          material.id !== id
      )
    );
  };

  const handleUpdateMaterial = (
    updatedMaterial: any
  ) => {
    setMaterials(
      materials.map((material) =>
        material.id ===
        updatedMaterial.id
          ? updatedMaterial
          : material
      )
    );

    setEditingMaterial(null);
  };

  const filteredMaterials =
    materials.filter((material) =>
      material.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Material Management
        </h1>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="bg-green-600 px-4 py-2 rounded"
        >
          Add Material
        </button>

      </div>

      <input
        type="text"
        placeholder="Search material..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
      />

      <MaterialTable
        materials={
          filteredMaterials
        }
        onDelete={
          handleDeleteMaterial
        }
        onEdit={(material) => {
          setEditingMaterial(
            material
          );
          setShowModal(true);
        }}
      />

      {showModal && (
        <AddMaterialModal
          material={
            editingMaterial
          }
          onClose={() => {
            setShowModal(false);
            setEditingMaterial(
              null
            );
          }}
          onAdd={
            editingMaterial
              ? handleUpdateMaterial
              : handleAddMaterial
          }
        />
      )}

    </div>
  );
}

export default Material;