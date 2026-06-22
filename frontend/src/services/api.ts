// const API_URL =
//   "http://localhost:5001/api";

// export const getSuppliers =
//   async () => {
//     const response =
//       await fetch(
//         `${API_URL}/suppliers`
//       );

//     return response.json();
//   };
// const API_URL = "http://localhost:5001/api";

// export const getSuppliers = async () => {
//   const response = await fetch(
//     `${API_URL}/suppliers`
//   );

//   return response.json();
// };
// const API_URL = "http://localhost:5001/api";

// export const getSuppliers = async () => {
//   const response = await fetch(
//     `${API_URL}/suppliers`
//   );


//   return response.json();
// };

// // export const deleteSupplier = async (
// //   id: number
// // ) => {

// //   const response =
// //     await fetch(
// //       `http://localhost:5001/api/suppliers/${id}`,
// //       {
// //         method: "DELETE",
// //       }
// //     );

// //   return response.json();

// // };
// export const deleteSupplier =
//   async (id: number) => {

//     const response =
//       await fetch(
//         `http://localhost:5001/api/suppliers/${id}`,
//         {
//           method: "DELETE",
//         }
//       );

//     return response.json();

//   };
//   export const updateSupplier =
//   async (
//     id: number,
//     supplier: any
//   ) => {

//     const response =
//       await fetch(
//         `http://localhost:5001/api/suppliers/${id}`,
//         {
//           method: "PUT",

//           headers: {
//             "Content-Type":
//               "application/json",
//           },

//           body: JSON.stringify(
//             supplier
//           ),
//         }
//       );

//     return response.json();

//   };

// export const addSupplier = async (
//   supplier: any
// ) => {

//   const response =
//     await fetch(
//       `${API_URL}/suppliers`,
//       {
//         method: "POST",

//         headers: {
//           "Content-Type":
//             "application/json",
//         },

//         body: JSON.stringify(
//           supplier
//         ),
//       }
//     );

//   return response.json();

// };
// ======================
// STORE APIs
// ======================

const API_URL = "http://localhost:5001/api";

// ======================
// SUPPLIER APIs
// ======================

export const getSuppliers = async () => {

  const response = await fetch(
    `${API_URL}/suppliers`
  );

  return response.json();

};

export const addSupplier = async (
  supplier: any
) => {

  const response = await fetch(
    `${API_URL}/suppliers`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        supplier
      ),
    }
  );

  return response.json();

};

export const updateSupplier = async (
  id: number,
  supplier: any
) => {

  const response = await fetch(
    `${API_URL}/suppliers/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        supplier
      ),
    }
  );

  return response.json();

};

export const deleteSupplier = async (
  id: number
) => {

  const response = await fetch(
    `${API_URL}/suppliers/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();

};


// ======================
// STORE APIs
// ======================

export const getStores = async () => {

  const response = await fetch(
    `${API_URL}/stores`
  );

  return response.json();

};

export const addStore = async (
  store: any
) => {

  const response = await fetch(
    `${API_URL}/stores`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        store
      ),
    }
  );

  return response.json();

};

export const updateStore = async (
  id: number,
  store: any
) => {

  const response = await fetch(
    `${API_URL}/stores/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        store
      ),
    }
  );

  return response.json();

};

export const deleteStore = async (
  id: number
) => {

  const response = await fetch(
    `${API_URL}/stores/${id}`,
    {
      method: "DELETE",
    }
  );

  return response.json();

};
// ======================
// EMPLOYEE APIs
// ======================

export const getEmployees =
  async () => {

    const response =
      await fetch(
        `${API_URL}/employees`
      );

    return response.json();

  };

export const addEmployee =
  async (
    employee: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/employees`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            employee
          ),
        }
      );

    return response.json();

  };

export const updateEmployee =
  async (
    id: number,
    employee: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/employees/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            employee
          ),
        }
      );

    return response.json();

  };

export const deleteEmployee =
  async (
    id: number
  ) => {

    const response =
      await fetch(
        `${API_URL}/employees/${id}`,
        {
          method: "DELETE",
        }
      );

    return response.json();

  };
// ======================
// MATERIAL APIs
// ======================

export const getMaterials =
  async () => {

    const response =
      await fetch(
        `${API_URL}/materials`
      );

    return response.json();

  };

export const addMaterial =
  async (
    material: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/materials`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            material
          ),
        }
      );

    return response.json();

  };

export const updateMaterial =
  async (
    id: number,
    material: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/materials/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            material
          ),
        }
      );

    return response.json();

  };

export const deleteMaterial =
  async (
    id: number
  ) => {

    const response =
      await fetch(
        `${API_URL}/materials/${id}`,
        {
          method: "DELETE",
        }
      );

    return response.json();

  };
  

  // ======================
// MANUFACTURER APIs
// ======================

// ======================
// MANUFACTURER APIs
// ======================

export const getManufacturers =
  async () => {

    const response =
      await fetch(
        `${API_URL}/manufacturers`
      );

    return response.json();

  };

export const addManufacturer =
  async (
    manufacturer: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/manufacturers`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            manufacturer
          ),
        }
      );

    return response.json();

  };

export const updateManufacturer =
  async (
    id: number,
    manufacturer: any
  ) => {

    const response =
      await fetch(
        `${API_URL}/manufacturers/${id}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            manufacturer
          ),
        }
      );

    return response.json();

  };

export const deleteManufacturer =
  async (
    id: number
  ) => {

    const response =
      await fetch(
        `${API_URL}/manufacturers/${id}`,
        {
          method: "DELETE",
        }
      );

    return response.json();

  };