const Product = require("../../model/product");

class ProductController {
  constructor() {
    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }
  async getAll(req, res) {
    try {
      const query = req?.query;
      const take = query?.take || 10;
      const skip = query?.skip || 0;
      const name = query?.name;
      const where = {};
      if (name) {
        where.name = { $regex: name, $options: "i" };
      }
      const result = await Product.find(where).limit(take).skip(skip);
      return res.status(200).json({
        result,
        message: "Products Fetched!",
      });
    } catch (e) {
      console.log("e", e);
      return res.status(400).json({
        result: null,
        message: "Something Went Wrong!",
      });
    }
  }
  async insert(req, res) {
    try {
      const body = req?.body;
      const result = await new Product(body).save();
      return res.status(200).json({
        result,
        message: "Product Created!",
      });
    } catch (e) {
      console.log("e", e);
      return res.status(400).json({
        result: null,
        message: "Something Went Wrong!",
      });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req?.params;
      const result = await Product.deleteOne({ _id: id });
      return res.status(200).json({
        result,
        message: "Product Deleted!",
      });
    } catch (e) {
      console.log("e", e);
      return res.status(400).json({
        result: null,
        message: "Something Went Wrong!",
      });
    }
  }
  async update(req, res) {
    try {
      const { id } = req?.params;
      const body = req?.body;
      const result = await Product.findOneAndUpdate({ _id: id }, body, {
        returnDocument: "after",
      });
      return res.status(200).json({
        result,
        message: "Product Updated!",
      });
    } catch (e) {
      return res.status(400).json({
        result: null,
        message: "Something Went Wrong!",
      });
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req?.params;
      const result = await Product.findOne({ _id: id });
      return res.status(200).json({
        result,
        message: "Product Fetched!",
      });
    } catch (e) {
      return res.status(400).json({
        result: null,
        message: "Something Went Wrong!",
      });
    }
  }
}
module.exports = { ProductController };
