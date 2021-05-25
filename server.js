const express = require("express");
const app = express();
app.use(express.json());
require("./app/routes/celulas.routes.js")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});