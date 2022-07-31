import product from '../model/product.js'



export const getAllProducts = async (req, res, next) => {
    let products;
    try {
      products = await product.find()
    } catch (err) {
      console.log(err);
    }
    if (!products) {
      return res.status(400).json({ message: "no products found" });
    }
    return res.status(200).json({ products });
  };
  export const addProducts = async (req, res, next) => {
    const { title, description, image, price } = req.body;
    
    const Products = new product({
      title,
      description,
      image,
      price,
    });
    try {
        await Products.save();
      } catch (err) {
        return console.log(err);
      }
    
    return res.status(200).json({ Products });
  };
  export const getById = async (req, res, next) => {
    const id = req.params.id;
    let Product;
    try {
      Product = await product.findById(id);
    } catch (err) {
      return console.log(err);
    }
    if (!Product) {
      return res.status(404).json({ message: "no product found" });
    }
    return res.status(200).json({ Product });
  };