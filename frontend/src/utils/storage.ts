export const getSupplierCount =
  () => {
    const suppliers =
      JSON.parse(
        localStorage.getItem(
          "suppliers"
        ) || "[]"
      );

    return suppliers.length;
  };