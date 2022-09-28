const Product = require("./product");
module.exports = (app) => {
  app.use("/api/product", Product);
  return app
};
