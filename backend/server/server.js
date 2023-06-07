const express = require("express");
const db = require("../db/database");
const router = require("../routes/routes");

const app = express();

db.sync(() => console.log(`Connected to MySQL Server`));

app.use(express.json());
app.use(router);

const port = "8080";
app.listen(port, () => console.log(`Server running on port: ${port}`));