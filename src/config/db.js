const mongoose = require("mongoose");

class DBConfig {
  constructor() {
    this.connections();
  }
  connections() {
    return mongoose
      .connect(
        process.env.DBURL || "mongodb+srv://jafeel:jafeel@cluster0.hsum6v",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("MONGO CONNECTED!");
      })
      .catch((e) => {
        console.log("SOMETHIG WENT WRONG WITH MONGO", e);
      });
  }
}

module.exports = { DBConfig };
