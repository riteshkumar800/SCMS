// const express = require("express");

// const router = express.Router();

// const suppliers = require("../data/suppliers");

// router.get("/", (req, res) => {
//   res.json(suppliers);
// });

// module.exports = router;
const express = require("express");
const router = express.Router();

const suppliers = require("../data/suppliers");

router.get("/", (req, res) => {
  res.json(suppliers);
});

router.post("/", (req, res) => {

  const newSupplier = {
    id: Date.now(),
    ...req.body,
  };

  suppliers.push(newSupplier);

  res.status(201).json(newSupplier);

});

router.delete("/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = suppliers.findIndex(
    supplier => supplier.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Supplier not found"
    });
  }

  suppliers.splice(index, 1);

  res.json({
    message: "Supplier deleted"
  });

});

router.put("/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = suppliers.findIndex(
    supplier =>
      Number(supplier.id) === id
  );

  if (index === -1) {

    return res.status(404).json({
      message: "Supplier not found"
    });

  }

  suppliers[index] = {
    ...suppliers[index],
    ...req.body,
    id,
  };

  res.json(
    suppliers[index]
  );

});

module.exports = router;