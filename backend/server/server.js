const express = require("express");
const db = require("../db/database");
const router = require("../routes/routes");
const cors = require("cors");

const app = express();

db.sync();

app.use(express.json());
app.use(cors());
app.use(router);

const port = "8080";
app.listen(port, () => console.log(`Server running on port: ${port}`));