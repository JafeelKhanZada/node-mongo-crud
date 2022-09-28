const router = require("express").Router();
const Product = require("../../controller/product");
const Controller = new Product.ProductController();
router.get("/", Controller.getAll);
router.post("/", Controller.insert);
router.delete("/:id", Controller.delete);
router.patch("/:id", Controller.update);
router.get("/:id", Controller.getOne);
module.exports = router;
