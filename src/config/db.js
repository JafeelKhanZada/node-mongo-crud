const mongoose = require("mongoose");

class DBConfig {
  constructor() {
    this.connections();
  }
  connections() {
    return mongoose
      .connect(process.env.DBURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("MONGO CONNECTED!");
      })
      .catch((e) => {
        console.log("SOMETHIG WENT WRONG WITH MONGO", e);
      });
  }
}

module.exports = { DBConfig };
