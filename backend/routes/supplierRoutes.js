// // const express = require("express");

// // const router = express.Router();

// // const suppliers = require("../data/suppliers");

// // router.get("/", (req, res) => {
// //   res.json(suppliers);
// // });

// // module.exports = router;
// const express = require("express");
// const router = express.Router();

// const suppliers = require("../data/suppliers");

// const {
//   getChannel,
// } = require("../rabbitmq");

// router.get("/", (req, res) => {
//   res.json(suppliers);
// });

// router.post("/", (req, res) => {

//   const newSupplier = {
//     id: Date.now(),
//     ...req.body,
//   };

//   // suppliers.push(newSupplier);

//   // res.status(201).json(newSupplier);
//   suppliers.push(newSupplier);

// const channel =
//   getChannel();

// if (channel) {

//   channel.sendToQueue(
//     "notification_queue",

//     Buffer.from(
//       JSON.stringify({
//         event:
//           "SUPPLIER_CREATED",

//         supplierName:
//           newSupplier.name,

//         timestamp:
//           new Date(),
//       })
//     )
//   );

//   console.log(
//     "Supplier Created Event Sent"
//   );

// }

// res.status(201).json(
//   newSupplier
// );

// });

// router.delete("/:id", (req, res) => {

//   const id = Number(req.params.id);

//   const index = suppliers.findIndex(
//     supplier => supplier.id === id
//   );

//   if (index === -1) {
//     return res.status(404).json({
//       message: "Supplier not found"
//     });
//   }

//   // suppliers.splice(index, 1);

//   // res.json({
//   //   message: "Supplier deleted"
//   // });
//   const deletedSupplier =
//   suppliers[index];

// suppliers.splice(index, 1);

// const channel =
//   getChannel();

// if (channel) {

//   channel.sendToQueue(
//     "notification_queue",

//     Buffer.from(
//       JSON.stringify({
//         event:
//           "SUPPLIER_DELETED",

//         supplierName:
//           deletedSupplier.name,

//         timestamp:
//           new Date(),
//       })
//     )
//   );

//   console.log(
//     "Supplier Deleted Event Sent"
//   );

// }

// res.json({
//   message:
//     "Supplier deleted"
// });

// });

// router.put("/:id", (req, res) => {

//   const id = Number(req.params.id);

//   const index = suppliers.findIndex(
//     supplier =>
//       Number(supplier.id) === id
//   );

//   if (index === -1) {

//     return res.status(404).json({
//       message: "Supplier not found"
//     });

//   }

//   suppliers[index] = {
//     ...suppliers[index],
//     ...req.body,
//     id,
//   };
//   const channel =
//   getChannel();

// if (channel) {

//   channel.sendToQueue(
//     "notification_queue",

//     Buffer.from(
//       JSON.stringify({
//         event:
//           "SUPPLIER_UPDATED",

//         supplierName:
//           suppliers[index].name,

//         timestamp:
//           new Date(),
//       })
//     )
//   );

//   console.log(
//     "Supplier Updated Event Sent"
//   );

// }

//   res.json(
//     suppliers[index]
//   );

// });

// module.exports = router;
const express = require("express");
const router = express.Router();

const suppliers = require("../data/suppliers");

const { getChannel } = require("../rabbitmq");

// router.get("/", (req, res) => {

//   console.log("GET ROUTE HIT");

//   res.send("HELLO");

// });
router.get("/", (req, res) => {
  console.log("GET ROUTE HIT");
  res.json(suppliers);
});


// ======================
// CREATE SUPPLIER
// ======================
// router.post("/", (req, res) => {

//   const newSupplier = {
//     id: Date.now(),
//     ...req.body,
//   };

//   suppliers.push(newSupplier);

//   const channel = getChannel();

//   console.log("POST route hit");
//   console.log("New Supplier:", newSupplier);

//   if (channel) {

//     channel.sendToQueue(
//       "notification_queue",
//       Buffer.from(
//         JSON.stringify({
//           event: "SUPPLIER_CREATED",
//           supplierName: newSupplier.name,
//           timestamp: new Date(),
//         })
//       )
//     );

//     console.log(
//       "Supplier Created Event Sent"
//     );

//   } else {

//     console.log(
//       "RabbitMQ Channel Not Found"
//     );

//   }

//   res.status(201).json(newSupplier);

// });
router.post("/", (req, res) => {

  const newSupplier = {
    id: Date.now(),
    ...req.body,
  };

  suppliers.push(newSupplier);

  console.log("================================");
  console.log("POST ROUTE HIT");
  console.log("Supplier Name:", newSupplier.name);

  const channel = getChannel();

  console.log("Channel:", channel);

  if (channel) {

    const eventData = {
      event: "SUPPLIER_CREATED",
      supplierName: newSupplier.name,
      timestamp: new Date(),
    };

    console.log(
      "Sending RabbitMQ Message:",
      eventData
    );

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify(eventData)
      )
    );

    console.log(
      "Supplier Created Event Sent"
    );

  } else {

    console.log(
      "RabbitMQ Channel Not Found"
    );

  }

  console.log("================================");

  res.status(201).json(newSupplier);
});


// ======================
// DELETE SUPPLIER
// ======================
router.delete("/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = suppliers.findIndex(
    supplier => Number(supplier.id) === id
  );

  if (index === -1) {

    return res.status(404).json({
      message: "Supplier not found",
    });

  }

  const deletedSupplier =
    suppliers[index];

  suppliers.splice(index, 1);

  const channel = getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event: "SUPPLIER_DELETED",
          supplierName:
            deletedSupplier.name,
          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Supplier Deleted Event Sent"
    );

  }

  res.json({
    message:
      "Supplier deleted",
  });

});


// ======================
// UPDATE SUPPLIER
// ======================
router.put("/:id", (req, res) => {

  const id = Number(req.params.id);

  const index = suppliers.findIndex(
    supplier =>
      Number(supplier.id) === id
  );

  if (index === -1) {

    return res.status(404).json({
      message: "Supplier not found",
    });

  }

  suppliers[index] = {
    ...suppliers[index],
    ...req.body,
    id,
  };

  const channel = getChannel();

  if (channel) {

    channel.sendToQueue(
      "notification_queue",
      Buffer.from(
        JSON.stringify({
          event: "SUPPLIER_UPDATED",
          supplierName:
            suppliers[index].name,
          timestamp:
            new Date(),
        })
      )
    );

    console.log(
      "Supplier Updated Event Sent"
    );

  }

  res.json(
    suppliers[index]
  );

});

module.exports = router;