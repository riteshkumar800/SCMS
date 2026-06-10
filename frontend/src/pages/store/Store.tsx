// import { useEffect, useState } from "react";

// import StoreTable from "../../components/StoreTable";
// import AddStoreModal from "../../components/AddStoreModal";

// import { stores as initialStores } from "../../services/storeService";

// interface StoreType {
//   id: number;
//   district: string;
//   subdivision: string;
//   block: string;
//   storeCode: string;
//   storeName: string;
//   storeType: string;
// }

// function Store() {

//   const [stores, setStores] =
//     useState<StoreType[]>(() => {

//       const storedStores =
//         localStorage.getItem(
//           "stores"
//         );

//       return storedStores
//         ? JSON.parse(storedStores)
//         : initialStores;
//     });

//   const [search, setSearch] =
//     useState("");

//   const [showModal, setShowModal] =
//     useState(false);

//   const [editingStore, setEditingStore] =
//     useState<StoreType | null>(
//       null
//     );

//   useEffect(() => {
//     localStorage.setItem(
//       "stores",
//       JSON.stringify(stores)
//     );
//   }, [stores]);

//   const handleAddStore = (
//     store: StoreType
//   ) => {
//     setStores([
//       ...stores,
//       store,
//     ]);
//   };

//   const handleDeleteStore = (
//     id: number
//   ) => {
//     setStores(
//       stores.filter(
//         (store) =>
//           store.id !== id
//       )
//     );
//   };

//   const handleUpdateStore = (
//     updatedStore: StoreType
//   ) => {
//     setStores(
//       stores.map((store) =>
//         store.id === updatedStore.id
//           ? updatedStore
//           : store
//       )
//     );

//     setEditingStore(null);
//   };

//   const filteredStores =
//     stores.filter((store) =>
//       store.storeName
//         .toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <div>

//       <div className="flex justify-between items-center mb-6">

//         <h1 className="text-3xl font-bold">
//           Store Management
//         </h1>

//         <button
//           onClick={() =>
//             setShowModal(true)
//           }
//           className="bg-green-600 px-4 py-2 rounded"
//         >
//           Add Store
//         </button>

//       </div>

//       <input
//         type="text"
//         placeholder="Search store..."
//         value={search}
//         onChange={(e) =>
//           setSearch(
//             e.target.value
//           )
//         }
//         className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
//       />

//       <StoreTable
//         stores={filteredStores}
//         onDelete={
//           handleDeleteStore
//         }
//         onEdit={(store) => {
//           setEditingStore(
//             store
//           );
//           setShowModal(true);
//         }}
//       />

//       {showModal && (
//         <AddStoreModal
//           store={editingStore}
//           onClose={() => {
//             setShowModal(false);
//             setEditingStore(
//               null
//             );
//           }}
//           onAdd={
//             editingStore
//               ? handleUpdateStore
//               : handleAddStore
//           }
//         />
//       )}

//     </div>
//   );
// }

// export default Store;
import { useEffect, useState } from "react";

import StoreTable from "../../components/StoreTable";
import AddStoreModal from "../../components/AddStoreModal";

import { stores as initialStores } from "../../services/storeService";
import { addActivity } from "../../services/activityService";

interface StoreType {
  id: number;
  district: string;
  subdivision: string;
  block: string;
  storeCode: string;
  storeName: string;
  storeType: string;
}

function Store() {
  const [stores, setStores] =
    useState<StoreType[]>(() => {
      const storedStores =
        localStorage.getItem(
          "stores"
        );

      return storedStores
        ? JSON.parse(storedStores)
        : initialStores;
    });

  const [search, setSearch] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [editingStore, setEditingStore] =
    useState<StoreType | null>(
      null
    );

  useEffect(() => {
    localStorage.setItem(
      "stores",
      JSON.stringify(stores)
    );
  }, [stores]);

  const handleAddStore = (
    store: StoreType
  ) => {
    setStores([
      ...stores,
      store,
    ]);

    addActivity(
      `Store Added: ${store.storeName}`
    );
  };

  const handleDeleteStore = (
    id: number
  ) => {
    setStores(
      stores.filter(
        (store) =>
          store.id !== id
      )
    );

    addActivity(
      "Store Deleted"
    );
  };

  const handleUpdateStore = (
    updatedStore: StoreType
  ) => {
    setStores(
      stores.map((store) =>
        store.id === updatedStore.id
          ? updatedStore
          : store
      )
    );

    addActivity(
      `Store Updated: ${updatedStore.storeName}`
    );

    setEditingStore(null);
  };

  const filteredStores =
    stores.filter((store) =>
      store.storeName
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Store Management
        </h1>

        <button
          onClick={() =>
            setShowModal(true)
          }
          className="bg-green-600 px-4 py-2 rounded"
        >
          Add Store
        </button>

      </div>

      <input
        type="text"
        placeholder="Search store..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
      />

      <StoreTable
        stores={filteredStores}
        onDelete={
          handleDeleteStore
        }
        onEdit={(store) => {
          setEditingStore(
            store
          );
          setShowModal(true);
        }}
      />

      {showModal && (
        <AddStoreModal
          store={editingStore}
          onClose={() => {
            setShowModal(false);
            setEditingStore(
              null
            );
          }}
          onAdd={
            editingStore
              ? handleUpdateStore
              : handleAddStore
          }
        />
      )}

    </div>
  );
}

export default Store;