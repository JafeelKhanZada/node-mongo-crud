const express = require("express");
const middleware = require("./src/middleware");
const PORT = process.env.PORT || 4000;
const app = express();
const Router = require("./src/router");
let DB = require("./src/config/db");
middleware(app);
DB = new DB.DBConfig();
Router(app);
app.listen(PORT, () => {
  console.log(`APP IS WORKING ON PORT # ${PORT}`);
});
