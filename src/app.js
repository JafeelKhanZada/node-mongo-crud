const express = require("express");
const middleware = require("./middleware");
const PORT = process.env.PORT || 4000;
const app = express();
const Router = require("./router");
let DB = require("./config/db");
middleware(app);
DB = new DB.DBConfig();
Router(app);
app.listen(PORT, () => {
  console.log(`APP IS WORKING ON PORT # ${PORT}`);
});
