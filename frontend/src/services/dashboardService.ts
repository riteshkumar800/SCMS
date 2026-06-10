// export const getSupplierCount = () => {
//   const suppliers =
//     JSON.parse(
//       localStorage.getItem("suppliers") || "[]"
//     );

//   return suppliers.length;
// };

// export const getMaterialCount = () => {
//   const materials =
//     JSON.parse(
//       localStorage.getItem("materials") || "[]"
//     );

//   return materials.length;
// };

// export const getManufacturerCount = () => {
//   const manufacturers =
//     JSON.parse(
//       localStorage.getItem(
//         "manufacturers"
//       ) || "[]"
//     );

//   return manufacturers.length;
// };
export const getSupplierCount = () => {
  return JSON.parse(
    localStorage.getItem("suppliers") || "[]"
  ).length;
};

export const getMaterialCount = () => {
  return JSON.parse(
    localStorage.getItem("materials") || "[]"
  ).length;
};

export const getManufacturerCount = () => {
  return JSON.parse(
    localStorage.getItem("manufacturers") || "[]"
  ).length;
};

// export const getEmployeeCount = () => {
//   return JSON.parse(
//     localStorage.getItem("employees") || "[]"
//   ).length;
// };
export const getEmployeeCount = () => {
  return JSON.parse(
    localStorage.getItem("employees") || "[]"
  ).length;
};

export const getStoreCount = () => {
  const stores =
    JSON.parse(
      localStorage.getItem("stores") || "[]"
    );

  return stores.length;
};