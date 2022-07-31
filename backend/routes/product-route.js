import express from 'express';
import { addProducts, getAllProducts, getById } from '../controllers/product-controller.js';


const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);
productsRouter.post("/addproduct",addProducts );
// productsRouter.put("/update/:id",updateBlog);
productsRouter.get("/:id",getById);
// productsRouter.delete("/:id",deleteBlog);
// productsRouter.get("/user/:id",getByUserId);





export default productsRouter;
