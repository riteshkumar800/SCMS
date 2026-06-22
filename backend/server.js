// const express = require("express");
// const cors = require("cors");

// const supplierRoutes = require("./routes/supplierRoutes");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/suppliers", supplierRoutes);

// app.get("/", (req, res) => {
//   res.send("Backend Working");
// });

// // app.listen(5000, () => {
// //   console.log("Server running on port 5000");
// // });
// const PORT = 5001;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");

const supplierRoutes =
  require("./routes/supplierRoutes");

const {
  connectRabbitMQ,
} = require("./rabbitmq");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/api/suppliers",
  supplierRoutes
);

app.get("/", (req, res) => {
  res.send("Backend Working");
});

const PORT = 5001;

async function startServer() {

  await connectRabbitMQ();

  app.listen(PORT, () => {
    console.log(
      `Server running on port ${PORT}`
    );
  });

}

startServer();