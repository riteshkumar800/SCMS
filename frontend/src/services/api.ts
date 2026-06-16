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
const API_URL = "http://localhost:5001/api";

export const getSuppliers = async () => {
  const response = await fetch(
    `${API_URL}/suppliers`
  );


  return response.json();
};

// export const deleteSupplier = async (
//   id: number
// ) => {

//   const response =
//     await fetch(
//       `http://localhost:5001/api/suppliers/${id}`,
//       {
//         method: "DELETE",
//       }
//     );

//   return response.json();

// };
export const deleteSupplier =
  async (id: number) => {

    const response =
      await fetch(
        `http://localhost:5001/api/suppliers/${id}`,
        {
          method: "DELETE",
        }
      );

    return response.json();

  };
  export const updateSupplier =
  async (
    id: number,
    supplier: any
  ) => {

    const response =
      await fetch(
        `http://localhost:5001/api/suppliers/${id}`,
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

export const addSupplier = async (
  supplier: any
) => {

  const response =
    await fetch(
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