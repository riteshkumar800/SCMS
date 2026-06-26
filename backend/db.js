const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "scms",
  password: "1234s",
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ PostgreSQL Connected");
  }
});

module.exports = pool;